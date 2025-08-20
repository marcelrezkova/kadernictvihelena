import { useEffect, useState } from 'react';
import { googleCalendarService } from '../services/googleCalendar';

export const useGoogleCalendar = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    initializeCalendar();
  }, []);

  const initializeCalendar = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Načtení Google API skriptu
      if (!window.gapi) {
        await loadGoogleAPI();
      }

      // Inicializace Google Calendar API
      await googleCalendarService.initializeGapi();
      setIsInitialized(true);

      // Kontrola autorizace
      const authInstance = window.gapi.auth2.getAuthInstance();
      setIsAuthorized(authInstance.isSignedIn.get());

    } catch (err) {
      console.error('Failed to initialize Google Calendar:', err);
      setError('Nepodařilo se připojit ke Google Calendar');
    } finally {
      setIsLoading(false);
    }
  };

  const loadGoogleAPI = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (window.gapi) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/api.js';
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load Google API'));
      document.head.appendChild(script);
    });
  };

  const authorize = async (): Promise<boolean> => {
    try {
      if (!isInitialized) {
        throw new Error('Google Calendar not initialized');
      }

      const success = await googleCalendarService.authorize();
      setIsAuthorized(success);
      return success;
    } catch (err) {
      console.error('Authorization failed:', err);
      setError('Nepodařilo se autorizovat přístup ke kalendáři');
      return false;
    }
  };

  const signOut = () => {
    if (window.gapi && window.gapi.auth2) {
      const authInstance = window.gapi.auth2.getAuthInstance();
      authInstance.signOut();
      setIsAuthorized(false);
    }
  };

  return {
    isInitialized,
    isAuthorized,
    isLoading,
    error,
    authorize,
    signOut,
    retry: initializeCalendar
  };
};