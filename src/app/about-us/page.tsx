import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { DOWNLOAD_URL } from '@/content/home';

export const metadata: Metadata = {
  title: 'About W88 Game - Pakistan APK Guide for Casino & Sports',
  description: 'Learn about w88game.com.pk, the independent W88 Game APK guide for Pakistan covering slots, live casino, sports, JazzCash and EasyPaisa.',
  keywords: ['W88 Game about', 'about us', 'W88 Game Pakistan', 'W88 Game history', 'casino apk guide', 'slots', 'live casino'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://w88game.com.pk/about-us",
  },
  openGraph: {
    title: 'About W88 Game - Pakistan APK Guide for Casino & Sports',
    description: 'Learn about w88game.com.pk, the independent W88 Game APK guide for Pakistan with slots, live casino and local wallet help.',
    url: "https://w88game.com.pk/about-us",
    siteName: "W88 Game",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://w88game.com.pk/w88-game-logo.webp",
        width: 1024,
        height: 1024,
        alt: "W88 Game official logo used by the independent APK guide",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'About W88 Game - Pakistan APK Guide for Casino & Sports',
    description: 'Learn about w88game.com.pk, the independent W88 Game APK guide for Pakistan with slots, live casino and local wallet help.',
    images: ["https://w88game.com.pk/w88-game-logo.webp"],
  },
};

export default function AboutPage() {
  return (
    <article className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Us</h1>
          </div>
          
          {/* Main Content */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-20 mb-8">
              <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center md:justify-start">
                <Link href="/" className="block">
                  <div className="relative w-[220px] h-[220px] md:w-[280px] md:h-[280px] mx-auto md:mx-0 rounded-2xl overflow-hidden bg-black">
                    <Image 
                      src="/w88-game-logo.webp" 
                      alt="W88 Game official logo"
                      title="About the W88 Game APK guide"
                      width={1024}
                      height={1024}
                      sizes="(max-width: 768px) 220px, 280px"
                      className="object-contain w-full h-full"
                      priority
                    />
                  </div>
                </Link>
              </div>
              <div className="md:w-2/3 md:pl-4 lg:pl-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    <a href="https://www.w88game.com.pk/" className="text-accent hover:text-accent font-semibold" target="_blank" rel="noopener noreferrer">w88game.com.pk</a> is an independent guide site for the <Link href="/" className="text-accent hover:underline font-semibold">W88 Game</Link> Android APK used by Pakistani players. We publish download steps, JazzCash and EasyPaisa wallet guides, promo explainers and safety tips—not the app developer itself. <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">Download the official APK</a> when you are ready to install on your phone or emulator.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Our pages focus on practical how-to content: verified download links, deposit and withdrawal walkthroughs, and responsible-play reminders because real-money balances can go down as well as up.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Our Aim Section */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">What We Publish</h2>
            <p className="text-lg md:text-xl text-white leading-relaxed text-center">
              We keep guides current when APK versions, payment screens or promo tabs change, and we answer common wallet questions in plain English for Pakistani readers. For anything not covered here, reach us through the <Link href="/contact-us" className="underline hover:text-orange-100 font-semibold">contact page</Link>.
            </p>
          </div>
          
          {/* Contact CTA */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Have Questions?</h2>
            <p className="text-gray-300 mb-6 text-lg">
              We're here to help! Contact our team for any information or queries about W88 Game.
            </p>
            <Link 
              href="/contact-us" 
              className="inline-block bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "W88 Game",
              "alternateName": "3 Patti W88 Game",
              "url": "https://w88game.com.pk",
              "logo": "https://w88game.com.pk/w88-game-logo.webp",
              "description": "Independent guide site for the W88 Game Android APK in Pakistan, covering downloads, JazzCash and EasyPaisa wallet guides, and responsible-play information.",
              "foundingDate": "2024",
              "foundingLocation": {
                "@type": "Country",
                "name": "Pakistan"
              },
              "sameAs": [
                "https://www.facebook.com/share/19sQbCJ2rc/?mibextid=wwXIfr"
              ],
              "founder": {
                "@type": "Person",
                "name": "Erio W88 Game Dev"
              }
            },
            "about": {
              "@type": "Thing",
              "name": "Card Gaming Platform",
              "description": "Online card gaming platform with real cash rewards serving Pakistani users"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://w88game.com.pk/about-us"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://w88game.com.pk" },
              { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://w88game.com.pk/about-us" }
            ]
          })
        }}
      />
    </article>
  );
} 