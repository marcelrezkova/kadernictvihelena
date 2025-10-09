export interface BookingData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message?: string;
}

export interface BookingResponse {
  success: boolean;
  message: string;
  booking_id?: number;
  error?: string;
}

export interface AvailableSlotsResponse {
  slots: string[];
}

const API_URL = '/api';

class BookingApiService {
  async getAvailableSlots(date: string): Promise<string[]> {
    try {
      const response = await fetch(`${API_URL}/bookings.php?date=${date}`);

      if (!response.ok) {
        throw new Error('Nepodařilo se načíst dostupné termíny');
      }

      const data: AvailableSlotsResponse = await response.json();
      return data.slots;
    } catch (error) {
      console.error('Error fetching available slots:', error);
      return [];
    }
  }

  async createBooking(bookingData: BookingData): Promise<BookingResponse> {
    try {
      const response = await fetch(`${API_URL}/bookings.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      const data: BookingResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Nepodařilo se vytvořit rezervaci');
      }

      return data;
    } catch (error) {
      console.error('Error creating booking:', error);
      throw error;
    }
  }

  async checkAvailability(date: string, time: string): Promise<boolean> {
    try {
      const availableSlots = await this.getAvailableSlots(date);
      return availableSlots.includes(time);
    } catch (error) {
      console.error('Error checking availability:', error);
      return false;
    }
  }
}

export const bookingApiService = new BookingApiService();
