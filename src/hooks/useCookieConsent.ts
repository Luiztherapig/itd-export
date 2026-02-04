import { useState, useEffect, useCallback } from "react";

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = "interdental_cookie_consent";

const defaultPreferences: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
};

export const useCookieConsent = () => {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (stored) {
      try {
        setPreferences(JSON.parse(stored));
      } catch {
        setPreferences(null);
      }
    }
    setIsLoading(false);
  }, []);

  const savePreferences = useCallback((prefs: CookiePreferences) => {
    const prefsWithEssential = { ...prefs, essential: true };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefsWithEssential));
    setPreferences(prefsWithEssential);
  }, []);

  const acceptAll = useCallback(() => {
    savePreferences({
      essential: true,
      analytics: true,
      marketing: true,
    });
  }, [savePreferences]);

  const rejectAll = useCallback(() => {
    savePreferences({
      essential: true,
      analytics: false,
      marketing: false,
    });
  }, [savePreferences]);

  const resetPreferences = useCallback(() => {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    setPreferences(null);
  }, []);

  const hasConsent = preferences !== null;

  return {
    preferences,
    isLoading,
    hasConsent,
    savePreferences,
    acceptAll,
    rejectAll,
    resetPreferences,
  };
};
