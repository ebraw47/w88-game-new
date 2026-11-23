import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import {
  APK_DETAILS,
  APP_SCREENSHOTS,
  BONUSES,
  CONS,
  DEPOSIT_STEPS,
  DOWNLOAD_STEPS,
  DOWNLOAD_URL,
  FAQS,
  FEATURES,
  GAME_GROUPS,
  HERO_COVER,
  HERO_IMAGE,
  HERO_VIDEO,
  HOME_META,
  PROMO_IMAGES,
  PROMO_VIDEOS,
  INSTALL_NOTES,
  LOGIN_STEPS,
  PAYMENT_METHODS,
  PROS,
  REGISTER_STEPS,
  SYSTEM_REQUIREMENTS,
  TIPS,
  WHATS_NEW,
  WITHDRAW_STEPS,
} from "@/content/home";

export const metadata: Metadata = {
  title: {
    default: HOME_META.title,
    template: "%s | W88 Game",
  },
  description: HOME_META.description,
  keywords: [
    "W88 Game",
    "w88 game download",
    "w88 game apk",
    "w88 game pakistan",
    "w88 game app",
    "download w88 game",
    "w88 game jazzcash",
    "w88 game easypaisa",
    "w88 game real money",
    "w88 game slots",
    "w88 game live casino",
    "earning app pakistan 2026",
  ],
  openGraph: {
    title: HOME_META.title,
    description: HOME_META.description,
    images: [
      {
        url: "https://w88game.com.pk/w88-game-logo.webp",
        width: 1024,
        height: 1024,
        alt: "W88 Game official logo",
      },
      {
        url: "https://w88game.com.pk/feature/og-image.webp",
        width: 1024,
        height: 1024,
        alt: "W88 Game APK guide for Pakistani players",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_META.title,
    description: HOME_META.description,
    images: [
      "https://w88game.com.pk/feature/twitter-card.webp",
      "https://w88game.com.pk/w88-game-logo.webp",
    ],
  },
};

function DownloadButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={DOWNLOAD_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative flex items-center px-8 py-4 text-white font-semibold text-lg rounded-full border-2 border-[#FF8A45] hover:bg-[#FF8A45]/10 transition-all group ${className}`}
    >
      <span>DOWNLOAD NOW</span>
      <div className="ml-3 bg-[#FF5C2B] rounded-full p-2 group-hover:scale-110 transition-transform">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      </div>
    </a>
  );
}

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://w88game.com.pk/#website",
        url: "https://w88game.com.pk/",
        name: "W88 Game",
        description: HOME_META.description,
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": "https://w88game.com.pk/#webpage",
        url: "https://w88game.com.pk/",
        name: HOME_META.title,
        description: HOME_META.description,
        isPartOf: { "@id": "https://w88game.com.pk/#website" },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [
            "#overview",
            "#what-is-w88-game",
            "#why-trending",
            "#download",
            "#features",
            "#games",
            "#bonuses",
            "#register-login",
            "#deposit-withdraw",
            "#safety",
            "#faq",
          ],
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://w88game.com.pk/w88-game-logo.webp",
          width: 1024,
          height: 1024,
          name: "W88 Game",
          description: "Official W88 Game logo used across the Pakistan APK guide.",
          ...imageObjectLicensing,
        },
      },
      {
        "@type": "Organization",
        "@id": "https://w88game.com.pk/#organization",
        name: "W88 Game",
        url: "https://w88game.com.pk/",
        logo: {
          "@type": "ImageObject",
          url: "https://w88game.com.pk/w88-game-logo.webp",
          width: 1024,
          height: 1024,
          ...imageObjectLicensing,
          creditText: "W88 Game logo",
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: "support@w88game.com.pk",
          contactType: "Customer Support",
          areaServed: "PK",
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "W88 Game",
        operatingSystem: "Android",
        applicationCategory: "GameApplication",
        image: "https://w88game.com.pk/w88-game-logo.webp",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "PKR",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.2",
          bestRating: "5",
          ratingCount: "87123",
        },
        downloadUrl: DOWNLOAD_URL,
        softwareVersion: "V2.1",
        fileSize: "14MB",
        description: HOME_META.description,
        screenshot: APP_SCREENSHOTS.map(
          (shot) => `https://w88game.com.pk${shot.src}`,
        ),
        author: {
          "@type": "Organization",
          name: "W88 Game",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
      {
        "@type": "HowTo",
        name: "How to download and install W88 Game APK on Android",
        description:
          "Step-by-step guide to download the official W88 Game APK in Pakistan and install it safely.",
        step: DOWNLOAD_STEPS.map((text, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          text,
        })),
      },
    ],
  };

  return (
    <>
      <Script
        id="homepage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative overflow-hidden border-b border-[#FFC933]/15 bg-[#07111F]">
        <Image
          src={HERO_COVER.src}
          alt={HERO_COVER.alt}
          title="W88 Game hero background cover"
          fill
          className="object-cover object-[center_35%] blur-[2px] scale-110 sm:object-[center_40%] sm:scale-105"
          priority
          fetchPriority="high"
          quality={95}
          sizes="100vw"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#100E0C] via-[#100E0C]/40 to-black/25"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-16">
          <div className="md:flex md:items-start md:justify-between md:space-x-12 lg:space-x-20">
            <div className="md:w-1/2 space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                  <span className="text-white">W88 Game</span>
                </h1>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                  <span className="text-[#FFC933]">
                    Download APK for Android
                  </span>{" "}
                  <span className="text-white">
                    &amp; Play Real Money Games in Pakistan 2026
                  </span>
                </h2>
              </div>

              <p className="text-lg text-gray-200 leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]">
                <Link href="/" className="text-accent hover:underline">
                  W88 Game
                </Link>{" "}
                is a rising Android casino and sports APK in Pakistan with
                slots, live studio tables, fishing rooms and cricket-friendly
                markets in one lobby. Fund your wallet with JazzCash or
                EasyPaisa, claim event bonuses, and withdraw winnings after
                verified play. This guide covers the official APK path, account
                setup, payments and safety checks for version 2.1.
              </p>

              <div className="flex justify-center my-8 md:justify-start">
                <DownloadButton />
              </div>

              <div className="flex flex-row gap-4 justify-center md:justify-start mt-8 mb-4">
                <div className="bg-black/55 backdrop-blur-sm border border-white/10 p-6 rounded-2xl text-center flex-1 max-w-[180px]">
                  <div className="text-white text-2xl font-bold mb-1">1M+</div>
                  <div className="text-gray-300 text-sm">Downloads</div>
                </div>
                <div className="bg-black/55 backdrop-blur-sm border border-white/10 p-6 rounded-2xl text-center flex-1 max-w-[180px]">
                  <div className="text-[#FFC933] text-2xl font-bold mb-1">
                    4.2★
                  </div>
                  <div className="text-gray-300 text-sm">87K+ Ratings</div>
                </div>
                <div className="bg-black/55 backdrop-blur-sm border border-white/10 p-6 rounded-2xl text-center flex-1 max-w-[180px]">
                  <div className="text-white text-2xl font-bold mb-1">14MB</div>
                  <div className="text-gray-300 text-sm">App Size</div>
                </div>
              </div>

              <p className="text-gray-300 text-sm text-center md:text-left italic">
                Free · Android · Casino &amp; Sports · Available for Android
                devices
              </p>
            </div>

            <figure className="mt-8 md:mt-0 md:w-1/2 flex flex-col items-center md:items-end">
              <div className="relative w-[240px] sm:w-[280px] md:w-[300px]">
                <div className="relative rounded-[2.4rem] border-[6px] border-[#2A2420] bg-[#090807] p-[5px] shadow-[0_28px_70px_rgba(0,0,0,0.55)] ring-1 ring-[#FFC933]/35">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[9px] top-28 h-12 w-[4px] rounded-l bg-[#40372F]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute -right-[9px] top-36 h-16 w-[4px] rounded-r bg-[#40372F]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-[5px] z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-[#090807]"
                  >
                    <span className="absolute left-1/2 top-1.5 h-1.5 w-8 -translate-x-1/2 rounded-full bg-[#332D28]" />
                  </div>
                  <div className="overflow-hidden rounded-[1.9rem] bg-black aspect-[1080/1920]">
                    <video
                      className="h-full w-full object-cover"
                      src={HERO_VIDEO.src}
                      poster={HERO_VIDEO.poster}
                      width={HERO_VIDEO.width}
                      height={HERO_VIDEO.height}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      controls
                      title={HERO_VIDEO.title}
                      aria-label={HERO_VIDEO.title}
                    />
                  </div>
                </div>
              </div>
              <Image
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                width={64}
                height={64}
                className="sr-only"
                priority
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFC933]">
          W88 Game APK Details
        </h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="divide-y divide-gray-800">
                {APK_DETAILS.map((row, index) => (
                  <tr
                    key={row.label}
                    className={
                      index % 2 === 0
                        ? "bg-[#1C1814]/50"
                        : "bg-[#100E0C]/50"
                    }
                  >
                    <td className="py-4 px-6 text-left font-medium text-white">
                      {row.label}
                    </td>
                    <td className="py-4 px-6 text-left text-white">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="overview" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFC933]">
            W88 Game Overview for Pakistani Players
          </h2>
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              W88 Game brings a full casino-and-sports lobby to Android phones
              used across Pakistan. Instead of focusing on one genre only, the
              app mixes slots such as Chest Frenzy and Heart of Atlantis, live
              studio rooms, fishing, card tables and cricket-friendly sports
              markets. That wider lobby is a clear gap many thin competitor
              pages skip when they only mention a short feature list.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The wallet side matters just as much as the games. Players can
              top up with JazzCash or EasyPaisa, track promo rebates, invite
              friends from the referral screen, and request withdrawals after
              binding payout details. If you want one APK for both entertainment
              and local-wallet cash play, W88 Game is built for that routine.
            </p>
          </div>
        </div>
      </section>

      <section
        id="what-is-w88-game"
        className="py-12 px-4 md:px-8 max-w-7xl mx-auto"
      >
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFC933]">
            What Is W88 Game and Who Is It For?
          </h2>
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              W88 Game is an Android real-money gaming app aimed at users who
              want quick sessions with a withdrawable balance. Searchers usually
              look for the APK, JazzCash deposits, bonuses and whether cash-outs
              actually reach EasyPaisa. This site answers those intents with
              practical steps instead of generic hype.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The app fits beginners who need simple menus, as well as regular
              players who check VIP progress, recharge rebates and invite
              commissions. Students and workers who prefer short mobile sessions
              often start with lower stakes, then move into live tables or
              sports markets once they understand the lobby. Responsible limits
              should stay part of every W88 Game session.
            </p>
          </div>
        </div>
      </section>

      <section
        id="why-trending"
        className="py-12 px-4 md:px-8 max-w-7xl mx-auto"
      >
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFC933]">
            Why W88 Game Is Trending in Pakistan
          </h2>
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Pakistani interest around W88 Game keeps rising because the app
              pairs familiar local wallets with a busy event calendar. Welcome
              matches, member-day deposit boosts, invite rewards and recharge
              rebates give people a reason to reopen the Promo tab. Competitor
              pages often list bonuses as bullets only; here the focus is how
              those offers connect to JazzCash and EasyPaisa deposits.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Social sharing also fuels growth. The invite screen makes it easy
              to copy a code, save a QR or send links on WhatsApp and other
              apps. When friends join and play, referral-style rewards can
              become a second path beside table wins. Combined with a light APK
              and English/Urdu friendly menus, W88 Game spreads quickly on
              mid-range Android phones.
            </p>
          </div>
        </div>
      </section>

      <section id="how-to-start" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFC933]">
            Get Started with W88 Game in a Few Minutes
          </h2>
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              You do not need a complicated setup before your first lobby visit.
              Follow this short path, then use the deeper download and wallet
              sections below when you are ready to deposit.
            </p>
            <ol className="list-decimal pl-5 space-y-3 text-gray-300">
              <li>
                Download the APK from{" "}
                <a
                  href={DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-semibold"
                >
                  the official download button
                </a>{" "}
                on this site.
              </li>
              <li>
                Install the file after allowing the required Android source
                permission.
              </li>
              <li>Register with your mobile number and verify the OTP.</li>
              <li>Open Promo to review active bonuses before depositing.</li>
              <li>
                Add a small JazzCash or EasyPaisa amount and choose a low-stake
                game first.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="rounded-2xl border border-[#FFC933]/15 bg-[#100E0C] p-5 md:p-8">
          <h2 className="mb-4 text-center text-3xl font-bold text-[#FFC933] md:text-4xl">
            W88 Game Visuals &amp; Featured Titles
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-300">
            These artworks show the Pakistan guide, live studio feel, Chest
            Frenzy, Heart of Atlantis and promotion creatives you will see
            across W88 Game marketing.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {APP_SCREENSHOTS.map((screenshot) => (
              <figure key={screenshot.src} className="mx-auto w-full">
                <div className="overflow-hidden rounded-2xl border border-[#FFC933]/25 bg-[#090807] shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    title={screenshot.title}
                    width={screenshot.width}
                    height={screenshot.height}
                    className="h-auto w-full object-cover"
                    loading="lazy"
                    quality={85}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 360px"
                  />
                </div>
                <figcaption className="mt-4 text-center font-semibold text-gray-200">
                  {screenshot.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent">
            Main Features Inside the W88 Game App
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-secondary px-8 py-8 rounded-lg card-glow"
              >
                <h3 className="text-xl font-semibold mb-3 text-accent">
                  {index + 1}. {feature.title}
                </h3>
                <p className="text-gray-300">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="games" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
            Popular Games You Can Open in W88 Game
          </h2>
          <div className="space-y-8">
            {GAME_GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="text-2xl font-semibold mb-4 text-[#FFC933]">
                  {group.title}
                </h3>
                <p className="text-gray-300 mb-4">{group.intro}</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="bonuses" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
            Bonuses, Rebates and Invite Rewards on W88 Game
          </h2>

          <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {PROMO_IMAGES.map((promo) => (
              <figure
                key={promo.src}
                className="overflow-hidden rounded-2xl border border-[#FFC933]/25 bg-[#1C1814] shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
              >
                <Image
                  src={promo.src}
                  alt={promo.alt}
                  title={promo.title}
                  width={promo.width}
                  height={promo.height}
                  className="h-auto w-full object-cover"
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <figcaption className="space-y-1 p-4">
                  <h3 className="text-lg font-semibold text-[#FFC933]">
                    {promo.title}
                  </h3>
                  <p className="text-sm text-gray-300">{promo.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="space-y-6">
            {BONUSES.map((bonus, index) => (
              <div key={bonus.title} className="bg-[#1C1814] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-[#FFC933]">
                  {index + 1}. {bonus.title}
                </h3>
                <p className="text-gray-300">{bonus.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-12">
            <h3 className="text-2xl font-bold text-[#FFC933]">
              Individual Promo Videos
            </h3>
            {PROMO_VIDEOS.map((video, index) => (
              <article
                key={video.id}
                id={video.id}
                className="overflow-hidden rounded-2xl border border-gray-800 bg-[#1C1814] p-5 md:p-8"
              >
                <div
                  className={`flex flex-col gap-6 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                  } lg:items-center`}
                >
                  <div className="lg:w-1/2">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#FFC933]/80">
                      Promo video {index + 1}
                    </p>
                    <h4 className="mb-3 text-2xl font-bold text-white">
                      {video.title}
                    </h4>
                    <p className="mb-4 text-gray-300 leading-relaxed">
                      {video.body}
                    </p>
                    <p className="text-sm text-gray-400">{video.caption}</p>
                  </div>
                  <div className="lg:w-1/2">
                    <div
                      className={`mx-auto overflow-hidden rounded-2xl border border-[#FFC933]/25 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.45)] ${
                        video.aspect === "portrait"
                          ? "max-w-[280px]"
                          : "max-w-[420px]"
                      }`}
                    >
                      <video
                        className={`h-auto w-full object-cover ${
                          video.aspect === "portrait"
                            ? "aspect-[1080/1920]"
                            : "aspect-square"
                        }`}
                        src={video.src}
                        poster={video.poster}
                        width={video.width}
                        height={video.height}
                        controls
                        playsInline
                        preload="metadata"
                        title={video.title}
                        aria-label={video.title}
                      >
                        <source src={video.src} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="text-gray-300 mt-6">
            For deeper promo rules, read the{" "}
            <Link
              href="/blog/w88-game-bonuses-vip-referral-guide"
              className="text-accent hover:underline"
            >
              bonuses, VIP and referral guide
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
            How to Download the Official W88 Game APK
          </h2>
          <ol className="list-decimal pl-5 space-y-3 text-gray-300 mb-8">
            {DOWNLOAD_STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <div className="flex justify-center">
            <DownloadButton />
          </div>
          <p className="text-gray-300 mt-6">
            Need a longer walkthrough? Visit the{" "}
            <Link
              href="/download-w88-game"
              className="text-accent hover:underline"
            >
              dedicated download page
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
            Install W88 Game on Android Safely
          </h2>
          <ul className="list-disc pl-5 space-y-3 text-gray-300">
            {INSTALL_NOTES.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
            Device Requirements for W88 Game
          </h2>
          <div className="overflow-hidden rounded-2xl border border-gray-800">
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="divide-y divide-gray-800">
                {SYSTEM_REQUIREMENTS.map((row, index) => (
                  <tr
                    key={row.label}
                    className={
                      index % 2 === 0
                        ? "bg-[#1C1814]/50"
                        : "bg-[#100E0C]/50"
                    }
                  >
                    <td className="py-4 px-6 font-medium text-white">
                      {row.label}
                    </td>
                    <td className="py-4 px-6 text-white">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section
        id="register-login"
        className="py-12 px-4 md:px-8 max-w-7xl mx-auto"
      >
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
            Create an Account and Login on W88 Game
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1C1814] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#FFC933]">
                Registration Steps
              </h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                {REGISTER_STEPS.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
            <div className="bg-[#1C1814] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#FFC933]">
                Login Steps
              </h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                {LOGIN_STEPS.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
          <p className="text-gray-300 mt-6">
            For a deeper account walkthrough, read the{" "}
            <Link
              href="/blog/w88-game-registration-login-guide"
              className="text-accent hover:underline"
            >
              registration and login guide
            </Link>
            .
          </p>
        </div>
      </section>

      <section
        id="deposit-withdraw"
        className="py-12 px-4 md:px-8 max-w-7xl mx-auto"
      >
        <div className="bg-secondary rounded-xl p-8 space-y-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
              JazzCash, EasyPaisa and Wallet Options in W88 Game
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PAYMENT_METHODS.map((method) => (
                <div key={method.title} className="bg-[#1C1814] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-[#FFC933]">
                    {method.title}
                  </h3>
                  <p className="text-gray-300">{method.body}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-300 mt-6">
              Prefer a focused wallet article? Read the{" "}
              <Link
                href="/blog/w88-game-jazzcash-easypaisa-guide"
                className="text-accent hover:underline"
              >
                JazzCash and EasyPaisa guide
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
              How to Add Money to Your W88 Game Wallet
            </h2>
            <ol className="list-decimal pl-5 space-y-2 text-gray-300 mb-4">
              {DEPOSIT_STEPS.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="text-gray-300">
              Full deposit screenshots and troubleshooting live on the{" "}
              <Link
                href="/deposit-money-in-w88-game"
                className="text-accent hover:underline"
              >
                deposit money guide
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
              How to Withdraw Winnings from W88 Game
            </h2>
            <ol className="list-decimal pl-5 space-y-2 text-gray-300 mb-4">
              {WITHDRAW_STEPS.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="text-gray-300">
              See limits, binding tips and cash-out checks on the{" "}
              <Link
                href="/withdraw-money-from-w88-game"
                className="text-accent hover:underline"
              >
                withdrawal guide
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
            Practical Tips to Play Smarter on W88 Game
          </h2>
          <ul className="list-disc pl-5 space-y-3 text-gray-300">
            {TIPS.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
            What Changed in the Latest W88 Game Version
          </h2>
          <ul className="list-disc pl-5 space-y-3 text-gray-300">
            {WHATS_NEW.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
            Pros and Cons of Using W88 Game
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1C1814] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFC933]">
                Pros
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                {PROS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-[#1C1814] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFC933]">
                Cons
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                {CONS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="safety" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
            Safety Checks Before You Deposit on W88 Game
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Download only from this site&apos;s official button, protect OTPs,
            and avoid sharing passwords in chats. Review withdrawal binding
            details with a small test cash-out before sending larger amounts.
            Real-money apps always carry risk, so set a budget and treat bonuses
            as optional value rather than guaranteed profit.
          </p>
          <p className="text-gray-300 leading-relaxed">
            For a fuller checklist, read{" "}
            <Link
              href="/blog/is-w88-game-safe-pakistan"
              className="text-accent hover:underline"
            >
              Is W88 Game safe in Pakistan?
            </Link>
          </p>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
            How to Contact W88 Game Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1C1814] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFC933]">
                In-App Support
              </h3>
              <p className="text-gray-300">
                Use the Support tab inside the app for deposit, login and
                withdrawal questions tied to your account ID.
              </p>
            </div>
            <div className="bg-[#1C1814] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFC933]">
                Site Contact
              </h3>
              <p className="text-gray-300">
                For guide feedback on w88game.com.pk, open the{" "}
                <Link href="/contact-us" className="text-accent hover:underline">
                  contact page
                </Link>
                .
              </p>
            </div>
            <div className="bg-[#1C1814] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFC933]">
                FAQ First
              </h3>
              <p className="text-gray-300">
                Many wallet and install answers are already covered in the FAQ
                section below and inside the app help center.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFC933]">
            Frequently Asked Questions about W88 Game
          </h2>
          <div className="space-y-4">
            {FAQS.map((item) => (
              <details
                key={item.q}
                className="group bg-[#1C1814]/50 rounded-xl border border-gray-700 hover:border-[#FFC933]/50 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFC933] transition-colors">
                  {item.q}
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-12 pb-4 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
            Final Verdict on W88 Game for Pakistan
          </h2>
          <div className="space-y-4">
            <p className="text-gray-300">
              W88 Game stands out when you want one Android APK with a mixed
              lobby, local wallet support and active promo tools. Use the
              official download, finish account security steps, start with a
              controlled deposit, and lean on the dedicated deposit, withdraw and
              safety guides when you need detail. Play for entertainment first,
              keep limits clear, and W88 Game becomes a clearer, more practical
              option than thin competitor pages that skip real wallet guidance.
            </p>
            <div className="flex justify-center pt-4">
              <DownloadButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
