import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/header/page";
import FooterComponent from "@/components/footer/page";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Arlig",
    template: "%s | Arlig",
  },
  description:
    "Arlig is your trusted partner for innovative solutions. We provide exceptional services in Home, About, Services, Blog, and Contact. Let's collaborate to bring your vision to life.",
  keywords: [
    "Arlig",
    "collaboration",
    "services",
    "business solutions",
    "innovation",
  ],
  authors: [{ name: "Arlig Team" }],
  creator: "Arlig",
  publisher: "Arlig",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Arlig - Let's Collaborate",
    description:
      "Arlig is your trusted partner for innovative solutions. We provide exceptional services to bring your vision to life.",
    url: "/",
    siteName: "Arlig",
    images: [
      {
        url: "/assets/arlig_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Arlig Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arlig",
    description: "Arlig is your trusted partner for innovative solutions.",
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
  verification: {
    // Add your verification tokens when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
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
              name: "Arlig",
              url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
              logo: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/assets/arlig_logo.jpg`,
              sameAs: [
                "https://twitter.com/arlig",
                "https://www.linkedin.com/company/arlig",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased font-sans`}>
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
