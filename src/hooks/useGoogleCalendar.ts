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

      setIsAuthorized(googleCalendarService.isAuthorized());

    } catch (err) {
      console.error('Failed to initialize Google Calendar:', err);
      setError('Nepodařilo se připojit ke Google Calendar');
    } finally {
      setIsLoading(false);
    }
  };

  const loadGoogleAPI = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      const loadGapi = new Promise<void>((res, rej) => {
        if (window.gapi) {
          res();
          return;
        }
        const script = document.createElement('script');
        script.src = 'https://apis.google.com/js/api.js';
        script.onload = () => res();
        script.onerror = () => rej(new Error('Failed to load gapi'));
        document.head.appendChild(script);
      });

      const loadGsi = new Promise<void>((res, rej) => {
        if (window.google?.accounts) {
          res();
          return;
        }
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.onload = () => res();
        script.onerror = () => rej(new Error('Failed to load GSI'));
        document.head.appendChild(script);
      });

      Promise.all([loadGapi, loadGsi])
        .then(() => resolve())
        .catch(reject);
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
    googleCalendarService.signOut();
    setIsAuthorized(false);
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