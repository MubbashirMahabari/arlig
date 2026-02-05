import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Use google fonts
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/header/page"; // Verify path
import FooterComponent from "@/components/footer/page"; // Verify path
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Arlig Technologies | Premium Salesforce Consulting Partner",
    template: "%s | Arlig Technologies - Salesforce Consulting Partner",
  },
  description:
    "Arlig Technologies is a leading Salesforce Consulting & Web Optimization firm. We help enterprises scale with Salesforce Sales, Service, Marketing, and Data Cloud solutions.",
  keywords: [
    "Salesforce Consulting",
    "Salesforce Partner",
    "CRM Implementation",
    "Web Optimization",
    "Salesforce AI",
    "Data Cloud",
    "Arlig Technologies",
  ],
  authors: [{ name: "Arlig Technologies" }],
  creator: "Arlig Technologies",
  publisher: "Arlig Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Arlig Technologies - Salesforce Consulting Partner",
    description:
      "Transform your business with expert Salesforce implementation, optimization, and consulting services from Arlig Technologies.",
    url: "/",
    siteName: "Arlig Technologies",
    images: [
      {
        url: "/assets/arlig_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Arlig Technologies Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arlig Technologies",
    description: "Expert Salesforce Consulting & Digital Transformation.",
    images: ["/assets/arlig_logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#003366" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Arlig Technologies",
              url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
              logo: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
                }/assets/arlig_logo.jpg`,
              sameAs: [
                "https://twitter.com/arlig",
                "https://www.linkedin.com/company/arlig",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-555-5555", // Replace with real number
                contactType: "customer service",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased font-sans`}>
        {/* Google Analytics - Replace G-XXXXXXXXXX with your actual Measurement ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        <Providers>
          <div className="min-h-screen flex flex-col">
            <header className="sticky top-0 z-50">
              <Header />
            </header>
            <main className="flex-1">{children}</main>
            <footer className="mt-auto">
              <FooterComponent />
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
