import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
});
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";
import { MobileMenuProvider } from "@/components/MobileMenuProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#100E0C",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://w88game.com.pk"),
  title: {
    default: "W88 Game Pakistan APK Download – Official Guide 2026",
    template: "%s | W88 Game",
  },
  description:
    "W88 Game 2026 – Download the official APK for Pakistan. Play slots, live casino, sports & fishing. Deposit with JazzCash & EasyPaisa and withdraw real cash.",
  keywords: [
    "W88 Game",
    "w88 game download",
    "w88 game apk",
    "w88 game pakistan",
    "w88 game app",
    "download w88 game",
    "w88 game real money",
    "w88 game jazzcash",
    "w88 game easypaisa",
    "w88 game login",
    "w88 game slots",
    "w88 casino app",
    "Pakistan casino apk",
    "live casino pakistan",
    "Android gaming app 2026",
    "JazzCash gaming",
    "EasyPaisa gaming",
    "real money games Pakistan",
    "w88 game for pc",
    "w88 game bonus",
  ],
  authors: [{ name: "W88 Game Editorial" }],
  creator: "W88 Game",
  publisher: "W88 Game",
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
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "any" },
      { url: "/favicon.webp", type: "image/webp", sizes: "64x64" },
      { url: "/favicon.png", type: "image/png", sizes: "180x180" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
  verification: {
    google: "8a7c21f6e90a89ef",
  },
  alternates: {
    canonical: "https://w88game.com.pk",
  },
  openGraph: {
    title: "W88 Game Pakistan APK Download – Official Guide 2026",
    description:
      "Download W88 Game APK for Pakistan. Slots, live casino, sports & JazzCash / EasyPaisa wallet play. Official V2.1 guide.",
    url: "https://w88game.com.pk",
    siteName: "W88 Game",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://w88game.com.pk/feature/og-image.webp",
        width: 512,
        height: 512,
        alt: "W88 Game – Pakistan APK Download Guide",
      },
      {
        url: "https://w88game.com.pk/feature/og-image-square.webp",
        width: 512,
        height: 512,
        alt: "W88 Game – Pakistan APK Download Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "W88 Game Pakistan APK Download – Official Guide 2026",
    description:
      "Download W88 Game APK for Pakistan. Slots, live casino, sports & JazzCash / EasyPaisa wallet play.",
    creator: "@w88game",
    images: [
      {
        url: "https://w88game.com.pk/feature/twitter-card.webp",
        width: 512,
        height: 512,
        alt: "W88 Game – Pakistan APK Download Guide",
      },
    ],
  },
  applicationName: "W88 Game",
  category: "Gaming",
  classification: "Casino Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="16x16 32x32 48x48"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.webp" type="image/webp" sizes="64x64" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="180x180" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />

        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === "string" &&
          process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
          !/^G-XXXXXXXXXX$/i.test(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
                strategy="lazyOnload"
              />
              <Script id="google-analytics" strategy="lazyOnload">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: false,
                  transport_type: 'beacon'
                });
              `}
              </Script>
            </>
          )}
      </head>
      <body
        className={`${poppins.className} antialiased bg-primary text-white min-h-screen flex flex-col`}
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(10, 16, 41, 0.4) 0%, rgba(6, 9, 31, 0.01) 90%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
        suppressHydrationWarning
      >
        <div className="stars-bg fixed inset-0 z-0 opacity-20"></div>
        <MobileMenuProvider>
          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
          <ScrollToTopWrapper />
        </MobileMenuProvider>
        <WebVitalsTracker />

        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "W88 Game",
              url: "https://w88game.com.pk",
              logo: "https://w88game.com.pk/w88-game-logo.webp",
              description:
                "W88 Game is a Pakistan-focused APK guide for slots, live casino, sports and wallet play with JazzCash and EasyPaisa.",
              sameAs: [
                "https://www.facebook.com/share/19sQbCJ2rc/?mibextid=wwXIfr",
              ],
            }),
          }}
        />

        <Script
          id="app-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "W88 Game",
              operatingSystem: "Android",
              applicationCategory: "GameApplication",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "PKR",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
