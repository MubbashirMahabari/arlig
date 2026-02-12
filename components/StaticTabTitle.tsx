"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * StaticTabTitle Component
 * 
 * Enforces a static browser tab title ("Arlig Technologies") across all navigations
 * while allowing Next.js to inject proper SEO meta tags in the background/SSR.
 */
export default function StaticTabTitle() {
    const pathname = usePathname();

    useEffect(() => {
        const desiredTitle = "Arlig Technologies";

        const enforceTitle = () => {
            if (document.title !== desiredTitle) {
                document.title = desiredTitle;
            }
        };

        // Run immediately
        enforceTitle();

        // Create an observer to watch for title changes invoked by Next.js or other scripts
        const observer = new MutationObserver(() => {
            enforceTitle();
        });

        // Observe the <title> tag for text changes
        const titleElement = document.querySelector("title");
        if (titleElement) {
            observer.observe(titleElement, {
                subtree: true,
                characterData: true,
                childList: true
            });
        }

        // Observe the <head> for addition/removal of nodes (e.g. Next.js replacing the title tag)
        observer.observe(document.head, {
            childList: true
        });

        return () => {
            observer.disconnect();
        };
    }, [pathname]);

    return null;
}
