export const setCookie = (name: string, value: string, days: number) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
};

export const getCookie = (name: string) => {
    if (typeof document === "undefined") return null;
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

export type CookieConsent = {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
};

export const CONSENT_COOKIE_NAME = "arlig_cookie_consent";

export const getConsent = (): CookieConsent | null => {
    const consent = getCookie(CONSENT_COOKIE_NAME);
    return consent ? JSON.parse(consent) : null;
};

export const saveConsent = (consent: CookieConsent) => {
    if (typeof document === "undefined") return;
    setCookie(CONSENT_COOKIE_NAME, JSON.stringify(consent), 365);
    window.dispatchEvent(new Event("cookie-consent-updated"));
};
