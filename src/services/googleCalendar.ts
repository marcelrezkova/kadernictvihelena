// Google Calendar API service
export interface BookingData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message?: string;
}

export interface CalendarEvent {
  summary: string;
  description: string;
  start: {
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
  attendees: Array<{
    email: string;
    displayName: string;
  }>;
}

class GoogleCalendarService {
  private readonly CALENDAR_ID = 'kadernictvih@gmail.com';
  private readonly API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
  private readonly CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  private accessToken: string | null = null;
  private tokenClient: any = null;

  async initializeGapi(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (typeof window.gapi === 'undefined') {
        reject(new Error('Google API not loaded'));
        return;
      }

      if (!this.CLIENT_ID || !this.API_KEY) {
        console.warn('Google Calendar credentials not configured - using fallback mode');
        resolve();
        return;
      }

      window.gapi.load('client', async () => {
        try {
          await window.gapi.client.init({
            apiKey: this.API_KEY,
            discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest']
          });

          console.log('Google Calendar API initialized successfully');
          resolve();
        } catch (error) {
          console.error('Error initializing Google Calendar API:', error);
          resolve();
        }
      });
    });
  }

  // Kontrola dostupnosti termínu
  async checkAvailability(date: string, time: string): Promise<boolean> {
    try {
      const startDateTime = new Date(`${date}T${time}:00`);
      const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000); // +1 hodina

      const response = await window.gapi.client.calendar.events.list({
        calendarId: this.CALENDAR_ID,
        timeMin: startDateTime.toISOString(),
        timeMax: endDateTime.toISOString(),
        singleEvents: true,
        orderBy: 'startTime'
      });

      return response.result.items.length === 0;
    } catch (error) {
      console.error('Error checking availability:', error);
      return false;
    }
  }

  // Vytvoření události v kalendáři
  async createBooking(bookingData: BookingData): Promise<string> {
    try {
      const startDateTime = new Date(`${bookingData.date}T${bookingData.time}:00`);
      const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000); // +1 hodina

      const event: CalendarEvent = {
        summary: `${bookingData.service} - ${bookingData.name}`,
        description: `
Klient: ${bookingData.name}
Telefon: ${bookingData.phone}
Email: ${bookingData.email}
Služba: ${bookingData.service}
${bookingData.message ? `Poznámka: ${bookingData.message}` : ''}

Kadeřnictví POHODA - Helena Bošínová
        `.trim(),
        start: {
          dateTime: startDateTime.toISOString(),
          timeZone: 'Europe/Prague'
        },
        end: {
          dateTime: endDateTime.toISOString(),
          timeZone: 'Europe/Prague'
        },
        attendees: [
          {
            email: bookingData.email,
            displayName: bookingData.name
          }
        ]
      };

      const response = await window.gapi.client.calendar.events.insert({
        calendarId: this.CALENDAR_ID,
        resource: event,
        sendUpdates: 'all'
      });

      return response.result.id;
    } catch (error) {
      console.error('Error creating booking:', error);
      throw new Error('Nepodařilo se vytvořit rezervaci');
    }
  }

  // Získání dostupných termínů
  async getAvailableSlots(date: string): Promise<string[]> {
    try {
      if (!this.CALENDAR_ID || !this.API_KEY) {
        console.warn('Calendar not configured');
        return [];
      }

      const startOfDay = new Date(`${date}T08:00:00+02:00`);
      const endOfDay = new Date(`${date}T18:00:00+02:00`);

      console.log('Fetching events from calendar:', this.CALENDAR_ID);
      console.log('Date range:', startOfDay.toISOString(), 'to', endOfDay.toISOString());

      // Použití REST API místo gapi client pro čtení veřejného kalendáře
      const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(this.CALENDAR_ID)}/events?` +
        `key=${this.API_KEY}&` +
        `timeMin=${encodeURIComponent(startOfDay.toISOString())}&` +
        `timeMax=${encodeURIComponent(endOfDay.toISOString())}&` +
        `singleEvents=true&` +
        `orderBy=startTime`;

      console.log('Fetching from URL:', url);

      const response = await fetch(url);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error:', response.status, errorText);
        return [];
      }

      const data = await response.json();
      console.log('Calendar API response:', data);
      console.log('Events found:', data.items?.length || 0);

      const bookedSlots = (data.items || []).map((event: any) => {
        const start = new Date(event.start.dateTime || event.start.date);
        return start.toTimeString().slice(0, 5);
      });

      console.log('Booked slots:', bookedSlots);

      const allSlots = [
        '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
        '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
        '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
        '17:00', '17:30'
      ];

      const availableSlots = allSlots.filter(slot => !bookedSlots.includes(slot));
      console.log('Available slots:', availableSlots);

      return availableSlots;
    } catch (error) {
      console.error('Error getting available slots:', error);
      return [];
    }
  }

  async authorize(): Promise<boolean> {
    return new Promise((resolve) => {
      if (!this.tokenClient) {
        console.error('Token client not initialized');
        resolve(false);
        return;
      }

      if (this.accessToken) {
        window.gapi.client.setToken({ access_token: this.accessToken });
        resolve(true);
        return;
      }

      this.tokenClient.callback = (response: any) => {
        if (response.error) {
          console.error('Authorization failed:', response);
          resolve(false);
          return;
        }
        this.accessToken = response.access_token;
        window.gapi.client.setToken({ access_token: this.accessToken });
        resolve(true);
      };

      this.tokenClient.requestAccessToken({ prompt: 'consent' });
    });
  }

  isAuthorized(): boolean {
    return !!this.accessToken;
  }

  signOut(): void {
    if (this.accessToken) {
      window.google.accounts.oauth2.revoke(this.accessToken, () => {
        console.log('Access token revoked');
      });
      this.accessToken = null;
      window.gapi.client.setToken(null);
    }
  }
}

export const googleCalendarService = new GoogleCalendarService();

declare global {
  interface Window {
    gapi: any;
    google: any;
  }
}