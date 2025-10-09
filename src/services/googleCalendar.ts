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
  private readonly CALENDAR_ID = import.meta.env.VITE_GOOGLE_CALENDAR_ID || 'primary';
  private readonly API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
  private readonly CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  // Inicializace Google Calendar API
  async initializeGapi(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (typeof window.gapi === 'undefined') {
        reject(new Error('Google API not loaded'));
        return;
      }

      window.gapi.load('client:auth2', async () => {
        try {
          if (!this.CLIENT_ID) {
            throw new Error('VITE_GOOGLE_CLIENT_ID není nastaven');
          }

          await window.gapi.client.init({
            clientId: this.CLIENT_ID,
            discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
            scope: 'https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.readonly'
          });

          console.log('Google Calendar API initialized successfully');
          resolve();
        } catch (error) {
          console.error('Error initializing Google Calendar API:', error);
          reject(error);
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
      const startOfDay = new Date(`${date}T08:00:00`);
      const endOfDay = new Date(`${date}T18:00:00`);

      const response = await window.gapi.client.calendar.events.list({
        calendarId: this.CALENDAR_ID,
        timeMin: startOfDay.toISOString(),
        timeMax: endOfDay.toISOString(),
        singleEvents: true,
        orderBy: 'startTime'
      });

      const bookedSlots = response.result.items.map(event => {
        const start = new Date(event.start.dateTime);
        return start.toTimeString().slice(0, 5);
      });

      const allSlots = [
        '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
        '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
        '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
        '17:00', '17:30'
      ];

      return allSlots.filter(slot => !bookedSlots.includes(slot));
    } catch (error) {
      console.error('Error getting available slots:', error);
      return [];
    }
  }

  // Autorizace uživatele
  async authorize(): Promise<boolean> {
    try {
      const authInstance = window.gapi.auth2.getAuthInstance();
      if (authInstance.isSignedIn.get()) {
        return true;
      }
      
      await authInstance.signIn();
      return authInstance.isSignedIn.get();
    } catch (error) {
      console.error('Authorization failed:', error);
      return false;
    }
  }
}

export const googleCalendarService = new GoogleCalendarService();

// Typy pro window.gapi
declare global {
  interface Window {
    gapi: any;
  }
}