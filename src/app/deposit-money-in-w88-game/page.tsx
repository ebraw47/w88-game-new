import { Metadata } from 'next';
import Link from 'next/link';
import { imageObjectLicensing } from '@/lib/schemaImageLicensing';
import { DOWNLOAD_URL } from '@/content/home';
import PhoneScreenshot from '@/components/PhoneScreenshot';

export const metadata: Metadata = {
  title: 'Top Up W88 Game Wallet with JazzCash & EasyPaisa | Deposit Guide 2026',
  description: 'Add PKR to your W88 Game wallet using JazzCash or EasyPaisa. Step-by-step deposit guide for Pakistani players with safety tips and promo checks.',
  keywords: 'deposit money w88 game, w88 game payment methods, jazzcash deposit, easypaisa deposit, add funds w88 game, w88 game recharge',
  openGraph: {
    title: 'Top Up W88 Game Wallet with JazzCash & EasyPaisa',
    description: 'Step-by-step guide to fund your W88 Game wallet with JazzCash and EasyPaisa in Pakistan.',
    url: 'https://w88game.com.pk/deposit-money-in-w88-game',
    siteName: 'W88 Game',
    type: 'article',
    images: [
      {
        url: 'https://w88game.com.pk/W88-GAME-PAKISTAN-GUIDEw88-PRDEPL26.webp',
        width: 796,
        height: 1406,
        alt: 'W88 Game deposit screen with JazzCash and EasyPaisa options',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Up W88 Game Wallet with JazzCash & EasyPaisa',
    description: 'Fund your W88 Game wallet with JazzCash and EasyPaisa using our complete Pakistani deposit guide.',
    images: ['https://w88game.com.pk/W88-GAME-PAKISTAN-GUIDEw88-PRDEPL26.webp'],
  },
  alternates: {
    canonical: 'https://w88game.com.pk/deposit-money-in-w88-game',
  },
};

export default function DepositMoneyPage() {
  return (
    <article className="min-h-screen bg-primary" itemScope itemType="https://schema.org/Article">
      <section className="relative py-12 md:py-20 bg-secondary border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Top Up Your W88 Game Wallet in Pakistan
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              JazzCash, EasyPaisa and in-app deposit channels explained step by step
            </p>
            <Link
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-accent/90 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              Download & Deposit Now
            </Link>
            <PhoneScreenshot
              src="/W88-GAME-PAKISTAN-GUIDEw88-PRDEPL26.webp"
              alt="W88 Game deposit screen showing JazzCash and EasyPaisa wallet options"
              title="Deposit money in W88 Game with Pakistani mobile wallets"
              width={850}
              height={395}
              priority
              className="mt-10"
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                <Link href="/" className="text-accent hover:underline font-semibold">W88 Game</Link> uses a real PKR wallet, so most tables need a funded balance before you join. If you have not installed the app yet, <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">download the official APK</a> first, then open Wallet or Deposit from the home or profile area. Pakistani players usually fund through JazzCash or EasyPaisa because those channels match how people already move money on mobile.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Deposits typically show within a few minutes when the payer number matches your wallet details. Check the Promo tab before you recharge—member-day boosts and rebate badges can add extra value to the same top-up. When you are ready to cash out winnings, follow our guide to <Link href="/withdraw-money-from-w88-game" className="text-accent hover:underline font-semibold">withdraw money from W88 Game</Link> using the same bound wallet paths.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Wallet Top-Up Walkthrough
            </h2>

            <ol className="space-y-8 list-none">
              <li className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1C1814] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6" aria-hidden="true">1</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Sign In on a Stable Connection</h3>
                    <p className="text-gray-300 leading-relaxed">Open W88 Game on Android and log in with the mobile number tied to your account. A steady 4G or Wi-Fi link reduces failed payment screens during checkout.</p>
                  </div>
                </div>
              </li>

              <li className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1C1814] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6" aria-hidden="true">2</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Open Wallet or Deposit</h3>
                    <p className="text-gray-300 leading-relaxed">From Home or Profile, tap Wallet or Deposit. The screen lists preset PKR amounts, bonus badges and the payment channels available for your account region.</p>
                  </div>
                </div>
              </li>

              <li className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1C1814] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6" aria-hidden="true">3</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Pick JazzCash or EasyPaisa</h3>
                    <p className="text-gray-300 leading-relaxed">Select the wallet you actually use. Some deposit routes also show scan-with-wallet or online options when standard channels are busy during peak hours.</p>
                  </div>
                </div>
              </li>

              <li className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1C1814] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6" aria-hidden="true">4</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Choose a Preset or Custom Amount</h3>
                    <p className="text-gray-300 leading-relaxed">Tap a preset like Rs 200, Rs 500 or Rs 1000, or enter a custom value within the on-screen minimum and maximum. Only deposit money you can afford to lose while learning table rules.</p>
                  </div>
                </div>
              </li>

              <li className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1C1814] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6" aria-hidden="true">5</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Enter the Payer Mobile Number</h3>
                    <p className="text-gray-300 leading-relaxed">Type the JazzCash or EasyPaisa number that will send the payment. It should match the wallet you control—mismatched payer details are a common reason credits fail to appear.</p>
                  </div>
                </div>
              </li>

              <li className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1C1814] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6" aria-hidden="true">6</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Confirm Inside Your Wallet App</h3>
                    <p className="text-gray-300 leading-relaxed">Submit the deposit request in W88 Game, then approve the payment prompt inside JazzCash or EasyPaisa. Double-check the amount before you authorize the transfer.</p>
                  </div>
                </div>
              </li>

              <li className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1C1814] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6" aria-hidden="true">7</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Wait for Balance Refresh</h3>
                    <p className="text-gray-300 leading-relaxed">Most deposits land within minutes. If the balance stays unchanged, reopen Wallet history or contact in-app support with your transaction reference instead of sending the same payment twice.</p>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Safer Deposits for New Players
            </h2>
            <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-300">Fund only from a wallet registered in your name.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-300">Read Promo timers before a large recharge so you do not miss rebate windows.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-300">Never share OTP codes, wallet PINs or account passwords with anyone claiming to be support.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-300">Start with a small test deposit until you trust the balance refresh speed on your network.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-300">Set a daily PKR limit and stop when you reach it—results vary and balances can go down.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Before You Join a Table</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                A successful deposit only starts the session—you still need to pick stake sizes that match your comfort level. Open lower-limit rooms first, confirm the balance updated, then explore Promo offers that may require minimum deposit amounts before rewards unlock.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Keep screenshots of failed payments when support asks for proof, and update the APK from the same trusted source so deposit screens stay current with JazzCash and EasyPaisa routing changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Deposit Questions Answered
            </h2>
            <div className="space-y-6">
              <div className="bg-secondary rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-accent mb-3">
                  Which wallets can I use to fund W88 Game?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Most Pakistani accounts see JazzCash and EasyPaisa on the deposit screen. Some builds also list scan or online wallet channels with bonus badges when standard routes are congested.
                </p>
              </div>

              <div className="bg-secondary rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-accent mb-3">
                  Why did my deposit not show up?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Check that the payer mobile number matches your wallet, the payment was approved inside JazzCash or EasyPaisa, and your network stayed online until the balance refreshed. Contact in-app support with your reference if it still pending after several minutes.
                </p>
              </div>

              <div className="bg-secondary rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-accent mb-3">
                  Is it safe to add PKR through the app?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Deposits go through familiar local wallet flows when you use the official APK and your own accounts. Protect OTPs and passwords, and only play with money you can afford to lose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Fund Your Wallet?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Install the official APK, complete a quick top-up, and explore the lobby at your own pace.
            </p>
            <Link
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-accent/90 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              Download W88 Game Now
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "@id": "https://w88game.com.pk/deposit-money-in-w88-game#article",
                "headline": "Top Up Your W88 Game Wallet in Pakistan",
                "description": "Step-by-step guide to fund your W88 Game wallet with JazzCash and EasyPaisa in Pakistan.",
                "url": "https://w88game.com.pk/deposit-money-in-w88-game",
                "image": {
                  "@type": "ImageObject",
                  "url": "https://w88game.com.pk/W88-GAME-PAKISTAN-GUIDEw88-PRDEPL26.webp",
                  "contentUrl": "https://w88game.com.pk/W88-GAME-PAKISTAN-GUIDEw88-PRDEPL26.webp",
                  "width": 796,
                  "height": 1406,
                  "caption": "W88 Game deposit screen with JazzCash and EasyPaisa options",
                  ...imageObjectLicensing
                },
                "articleBody": "W88 Game uses a real PKR wallet funded through JazzCash and EasyPaisa. Open Wallet or Deposit, pick a channel and amount, enter the payer mobile number, approve inside your wallet app, then wait for the balance refresh before joining tables.",
                "author": { "@type": "Organization", "name": "W88 Game", "url": "https://w88game.com.pk" },
                "publisher": {
                  "@type": "Organization",
                  "name": "W88 Game",
                  "logo": {
                  "@type": "ImageObject",
                  "url": "https://w88game.com.pk/w88-game-guide.webp",
                  ...imageObjectLicensing,
                  "creditText": "W88 Game logo"
                }
                },
                "datePublished": "2026-01-01",
                "dateModified": "2026-07-19",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://w88game.com.pk/deposit-money-in-w88-game" },
                "inLanguage": "en-US",
                "hasPart": {
                  "@type": "HowTo",
                  "@id": "https://w88game.com.pk/deposit-money-in-w88-game#howto",
                  "name": "Top Up W88 Game Wallet"
                }
              },
              {
                "@type": "HowTo",
                "@id": "https://w88game.com.pk/deposit-money-in-w88-game#howto",
                "name": "Top Up Your W88 Game Wallet",
                "description": "Fund W88 Game with JazzCash or EasyPaisa in Pakistan",
                "url": "https://w88game.com.pk/deposit-money-in-w88-game",
                "totalTime": "PT3M",
                "estimatedCost": { "@type": "MonetaryAmount", "currency": "PKR", "value": "200" },
                "step": [
                  { "@type": "HowToStep", "name": "Sign In on a Stable Connection", "text": "Open W88 Game on Android and log in with your registered mobile number." },
                  { "@type": "HowToStep", "name": "Open Wallet or Deposit", "text": "Tap Wallet or Deposit from Home or Profile to view amounts and channels." },
                  { "@type": "HowToStep", "name": "Pick JazzCash or EasyPaisa", "text": "Select the local wallet you will use to send the payment." },
                  { "@type": "HowToStep", "name": "Choose a Preset or Custom Amount", "text": "Pick a preset PKR value or enter a custom amount within app limits." },
                  { "@type": "HowToStep", "name": "Enter the Payer Mobile Number", "text": "Type the JazzCash or EasyPaisa number that will pay the deposit." },
                  { "@type": "HowToStep", "name": "Confirm Inside Your Wallet App", "text": "Approve the payment request inside JazzCash or EasyPaisa." },
                  { "@type": "HowToStep", "name": "Wait for Balance Refresh", "text": "Wait for the in-app balance to update before joining tables." }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://w88game.com.pk/deposit-money-in-w88-game#faq",
                "mainEntity": [
                  { "@type": "Question", "name": "Which wallets can I use to fund W88 Game?", "acceptedAnswer": { "@type": "Answer", "text": "Most Pakistani accounts see JazzCash and EasyPaisa on the deposit screen, with occasional scan or online wallet channels when standard routes are busy." } },
                  { "@type": "Question", "name": "Why did my deposit not show up?", "acceptedAnswer": { "@type": "Answer", "text": "Verify the payer number, confirm approval inside your wallet app, and check your network. Contact in-app support with your reference if the balance stays unchanged." } },
                  { "@type": "Question", "name": "Is it safe to add PKR through the app?", "acceptedAnswer": { "@type": "Answer", "text": "Use the official APK and your own wallet accounts, protect OTPs and passwords, and only deposit money you can afford to lose." } }
                ]
              }
            ]
          }).replace(/</g, "\\u003c")
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
              { "@type": "ListItem", "position": 2, "name": "Deposit Money in W88 Game", "item": "https://w88game.com.pk/deposit-money-in-w88-game" }
            ]
          })
        }}
      />
    </article>
  );
}
