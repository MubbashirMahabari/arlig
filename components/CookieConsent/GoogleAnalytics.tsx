"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { getConsent, CONSENT_COOKIE_NAME } from "@/lib/cookieUtils";

export default function GoogleAnalytics({ gaId }: { gaId: string }) {
    const [consent, setConsent] = useState(false);

    useEffect(() => {
        const currentConsent = getConsent();
        if (currentConsent && currentConsent.analytics) {
            setConsent(true);
        }

        // Listen for custom event dispatch when consent changes
        const handler = () => {
            const updatedConsent = getConsent();
            if (updatedConsent && updatedConsent.analytics) {
                setConsent(true);
            } else {
                // Technically GA once loaded is hard to unload without refresh, 
                // but we can stop tracking or clear cookies if needed.
                // For now, we just handle enabling.
                setConsent(updatedConsent?.analytics || false);
            }
        };

        window.addEventListener("cookie-consent-updated", handler);
        return () => window.removeEventListener("cookie-consent-updated", handler);
    }, []);

    if (!consent) return null;

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaId}');
        `}
            </Script>
        </>
    );
}
