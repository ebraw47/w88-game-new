import { Metadata } from 'next';
import Link from 'next/link';
import { DOWNLOAD_URL } from '@/content/home';
import PhoneScreenshot from '@/components/PhoneScreenshot';

export const metadata: Metadata = {
  title: 'Download W88 Game APK V2.1 Free for Android Pakistan 2026',
  description: 'Get the official W88 Game APK for Android in Pakistan. Compact 14MB file, JazzCash & EasyPaisa wallet support, slots, cards and live lobby. Version V2.1.',
  keywords: [
    'Download W88 Game',
    'W88 Game APK download',
    'W88 Game Android',
    'w88 game pakistan apk',
    'Free earning game APK',
    'W88 Game latest version',
    'w88 game V2.1'
  ],
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
    canonical: "https://w88game.com.pk/download-w88-game",
  },
  openGraph: {
    title: 'Download W88 Game APK V2.1 for Android Pakistan',
    description: 'Official W88 Game APK download. Slots, cards, fishing and wallet play with JazzCash & EasyPaisa. 1M+ installs.',
    url: "https://w88game.com.pk/download-w88-game",
    siteName: "W88 Game",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://w88game.com.pk/w88-game-guide.webp",
        width: 350,
        height: 350,
        alt: "Download W88 Game APK",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Download W88 Game APK V2.1 for Android Pakistan',
    description: 'Official W88 Game APK download. Slots, cards, fishing and wallet play with JazzCash & EasyPaisa.',
    images: ["https://w88game.com.pk/w88-game-guide.webp"],
  },
};

export default function DownloadPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "W88 Game",
    "operatingSystem": "Android 5.0+",
    "applicationCategory": "GameApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "PKR",
      "availability": "https://schema.org/InStock"
    },
    "downloadUrl": DOWNLOAD_URL,
    "softwareVersion": "V2.1",
    "fileSize": "14MB",
    "datePublished": "2026-07-01",
    "description": "Official W88 Game APK for Android in Pakistan. Compact install with JazzCash and EasyPaisa wallet support, slots, cards and live lobby games.",
    "screenshot": [
      "https://w88game.com.pk/W88-GAME-PAKISTAN-GUIDE.webp",
      "https://w88game.com.pk/W88-GAME-PAKISTAN-studio.webp",
      "https://w88game.com.pk/w88-game-guide.webp",
      "https://w88game.com.pk/W88-GAME-PAKISTAN-GUIDEw88-PRDEPL26.webp",
      "https://w88game.com.pk/W88-GAME-PAKISTAN-GUIDEw88-PRDEPL26.webp"
    ],
    "image": "https://w88game.com.pk/w88-game-guide.webp",
    "author": {
      "@type": "Organization",
      "name": "W88 Game",
      "url": "https://w88game.com.pk"
    },
    "inLanguage": ["en", "ur"],
    "countriesSupported": "PK"
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://w88game.com.pk" },
              { "@type": "ListItem", "position": 2, "name": "Download W88 Game", "item": "https://w88game.com.pk/download-w88-game" }
            ]
          })
        }}
      />
      
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Official </span>
            <span className="text-[#FFC933]">W88 Game APK</span>
            <span className="text-white"> Download</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
            Android Pakistan · Version V2.1
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            <Link href="/" className="text-accent hover:underline font-semibold">W88 Game</Link> packs slots, card tables, fishing rooms and live-style titles into one lightweight Android APK built for Pakistani wallet users. Use the button below to grab the current official file from w88game.com.pk instead of random renamed copies floating on APK sites.
          </p>
        </div>

        <div className="flex justify-center my-12">
          <a 
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center px-12 py-6 text-white font-bold text-xl rounded-full border-2 border-[#FF8A45] hover:bg-[#FF8A45]/10 transition-all group shadow-2xl"
          >
            <span className="mr-4">DOWNLOAD NOW</span>
            <div className="bg-[#FF5C2B] rounded-full p-3 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </div>
          </a>
        </div>

        <div className="flex justify-center mb-8">
          <span className="bg-[#1C1814] text-[#4ade80] px-6 py-2 rounded-full text-sm font-semibold">
            ⚡ Fast APK Download
          </span>
        </div>

        <PhoneScreenshot
          src="/W88-GAME-PAKISTAN-GUIDE.webp"
          alt="W88 Game home lobby after installing the Android APK in Pakistan"
          title="W88 Game home lobby after APK installation"
          width={850}
          height={395}
          priority
          className="mb-12"
        />
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download-info">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFC933] text-center">APK File Snapshot</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800 max-w-3xl mx-auto">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-[#1C1814]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">App Name</td>
                  <td className="py-4 px-6 text-left text-white">W88 Game</td>
                </tr>
                <tr className="bg-[#100E0C]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Version</td>
                  <td className="py-4 px-6 text-left text-white">V2.1</td>
                </tr>
                <tr className="bg-[#1C1814]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Size</td>
                  <td className="py-4 px-6 text-left text-white">14MB</td>
                </tr>
                <tr className="bg-[#100E0C]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Required OS</td>
                  <td className="py-4 px-6 text-left text-white">Android 5.0+</td>
                </tr>
                <tr className="bg-[#1C1814]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Update</td>
                  <td className="py-4 px-6 text-left text-white">July 2026</td>
                </tr>
                <tr className="bg-[#100E0C]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Price</td>
                  <td className="py-4 px-6 text-left text-white">Free (0 PKR)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <a 
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn bg-transparent hover:bg-[#FF8A45]/10 text-white font-bold py-4 px-8 rounded-full inline-flex items-center transition-all shadow-lg hover:shadow-xl border-2 border-[#FF8A45]"
          >
            <span className="text-lg">DOWNLOAD NOW</span>
            <div className="download-icon ml-2 bg-[#FF5C2B] rounded-full p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </div>
          </a>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download-steps">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFC933] text-center">
            Install W88 Game on Android in Four Steps
          </h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-[#1C1814] rounded-lg p-6 border-l-4 border-[#FFC933]">
              <h3 className="text-xl font-bold text-[#FFC933] mb-3">Step 1: Save the Official APK</h3>
              <p className="text-gray-300 leading-relaxed">
                Tap Download Now on this page and wait until the W88 Game package finishes saving. Stick to w88game.com.pk so you avoid clone files with similar names on third-party APK folders.
              </p>
            </div>

            <div className="bg-[#1C1814] rounded-lg p-6 border-l-4 border-[#4ade80]">
              <h3 className="text-xl font-bold text-[#4ade80] mb-3">Step 2: Allow Browser Installs</h3>
              <p className="text-gray-300 leading-relaxed">
                If Android blocks the file, open Settings → Apps → Special app access → Install unknown apps and enable your browser. This one-time permission is normal for APK files outside the Play Store.
              </p>
            </div>

            <div className="bg-[#1C1814] rounded-lg p-6 border-l-4 border-[#60a5fa]">
              <h3 className="text-xl font-bold text-[#60a5fa] mb-3">Step 3: Run the Installer</h3>
              <p className="text-gray-300 leading-relaxed">
                Open the downloaded APK from your notification shade or Downloads folder, then confirm Install. The compact package usually completes within a minute on mid-range phones common in Pakistan.
              </p>
            </div>

            <div className="bg-[#1C1814] rounded-lg p-6 border-l-4 border-[#FF5C2B]">
              <h3 className="text-xl font-bold text-[#FF5C2B] mb-3">Step 4: Register and Explore the Lobby</h3>
              <p className="text-gray-300 leading-relaxed">
                Launch W88 Game, verify your mobile number, and browse Home, Promo and Wallet tabs. Start with lower stakes until you understand table speed, then fund your wallet through JazzCash or EasyPaisa when you are ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFC933] text-center">
          What You Get After Install
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFC933]">Real Wallet Balance</h3>
            <p className="text-gray-300">Play with a live PKR balance that can rise or fall depending on your sessions and bonus use.</p>
          </div>
          
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFC933]">Full Game Lobby</h3>
            <p className="text-gray-300">Cards, slots, fishing, live-style rooms and mini games sit inside one APK instead of separate installs.</p>
          </div>
          
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFC933]">Local Wallet Cash-Out</h3>
            <p className="text-gray-300">Withdraw through JazzCash and EasyPaisa paths many Pakistani players already use daily.</p>
          </div>
          
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFC933]">Promo & Rebate Hub</h3>
            <p className="text-gray-300">Member-day boosts, recharge rebates and invite rewards appear inside the Promo tab.</p>
          </div>
          
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFC933]">Account Safety Tools</h3>
            <p className="text-gray-300">Security center options and withdrawal binding help protect your wallet before larger deposits.</p>
          </div>
          
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFC933]">Light Daily Use</h3>
            <p className="text-gray-300">The small package and clear menus suit short sessions on everyday Android phones.</p>
          </div>
        </div>
      </section>

      <section className="pt-6 pb-8 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <Link href="/" className="text-[#FF8A45] hover:text-[#FF8A45] font-medium transition-colors">
          ← Back to Home
        </Link>
      </section>
    </article>
  );
}
