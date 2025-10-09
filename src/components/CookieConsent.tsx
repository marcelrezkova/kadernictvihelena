import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    functional: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
  };

  const acceptAll = () => {
    savePreferences({ necessary: true, functional: true });
  };

  const acceptNecessary = () => {
    savePreferences({ necessary: true, functional: false });
  };

  const saveCustom = () => {
    savePreferences(preferences);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <div className="fixed inset-x-0 bottom-0 pointer-events-auto">
        <div className="bg-white dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            {!showSettings ? (
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-shrink-0 w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-rose-600 dark:text-rose-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                      Používáme cookies
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      Tento web používá nezbytné cookies pro zajištění funkčnosti rezervačního systému
                      a funkční cookies od Google OAuth pro správu rezervací. Více informací najdete
                      v našich{' '}
                      <button className="text-rose-600 dark:text-rose-400 hover:underline font-medium">
                        Zásadách ochrany osobních údajů
                      </button>.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setShowSettings(true)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded-lg transition-colors"
                  >
                    <Settings className="w-4 h-4" />
                    Nastavení
                  </button>
                  <button
                    onClick={acceptNecessary}
                    className="px-4 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-700 rounded-lg transition-colors"
                  >
                    Pouze nezbytné
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-4 py-2.5 text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 dark:bg-rose-500 dark:hover:bg-rose-600 rounded-lg transition-colors"
                  >
                    Přijmout vše
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                    Nastavení cookies
                  </h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4 p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-neutral-900 dark:text-white">
                          Nezbytné cookies
                        </h4>
                        <span className="text-xs px-2 py-1 bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full">
                          Vždy aktivní
                        </span>
                      </div>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Tyto cookies jsou nezbytné pro správné fungování webu a rezervačního systému.
                        Nelze je vypnout.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-12 h-6 bg-rose-600 rounded-full relative cursor-not-allowed opacity-50">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-all" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-4 p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">
                        Funkční cookies (Google OAuth)
                      </h4>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Cookies od Google pro autentizaci a správu online rezervací přes Google Calendar.
                        Bez těchto cookies nebude možné provést online rezervaci.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <button
                        onClick={() =>
                          setPreferences((prev) => ({
                            ...prev,
                            functional: !prev.functional,
                          }))
                        }
                        className={`w-12 h-6 rounded-full relative transition-colors ${
                          preferences.functional
                            ? 'bg-rose-600'
                            : 'bg-neutral-300 dark:bg-neutral-600'
                        }`}
                      >
                        <div
                          className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                            preferences.functional ? 'right-1' : 'left-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-end">
                  <button
                    onClick={() => setShowSettings(false)}
                    className="px-4 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-700 rounded-lg transition-colors"
                  >
                    Zrušit
                  </button>
                  <button
                    onClick={saveCustom}
                    className="px-4 py-2.5 text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 dark:bg-rose-500 dark:hover:bg-rose-600 rounded-lg transition-colors"
                  >
                    Uložit nastavení
                  </button>
                </div>

                <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center">
                  Své nastavení můžete kdykoli změnit v patičce webu v sekci "Nastavení cookies"
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
