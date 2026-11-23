import { Metadata } from 'next';
import Link from 'next/link';
import { imageObjectLicensing } from '@/lib/schemaImageLicensing';
import { DOWNLOAD_URL } from '@/content/home';
import PhoneScreenshot from '@/components/PhoneScreenshot';

export const metadata: Metadata = {
  title: 'Cash Out from W88 Game via JazzCash & EasyPaisa | Withdrawal Guide 2026',
  description: 'Withdraw PKR from W88 Game using JazzCash, EasyPaisa or bank binding. Step-by-step cash-out guide for Pakistani players with limits and troubleshooting tips.',
  keywords: 'withdraw money w88 game, w88 game withdrawal, jazzcash withdrawal, easypaisa withdrawal, cash out w88 game, w88 game payout',
  openGraph: {
    title: 'Cash Out from W88 Game via JazzCash & EasyPaisa',
    description: 'Step-by-step guide to withdraw PKR from W88 Game using JazzCash, EasyPaisa and bank binding.',
    url: 'https://w88game.com.pk/withdraw-money-from-w88-game',
    siteName: 'W88 Game',
    type: 'article',
    images: [
      {
        url: 'https://w88game.com.pk/w88-game-guide.webp',
        width: 794,
        height: 1408,
        alt: 'W88 Game account wallet with withdrawal and payment controls',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cash Out from W88 Game via JazzCash & EasyPaisa',
    description: 'Learn how to withdraw PKR from W88 Game with our complete Pakistani cash-out guide.',
    images: ['https://w88game.com.pk/w88-game-guide.webp'],
  },
  alternates: {
    canonical: 'https://w88game.com.pk/withdraw-money-from-w88-game',
  },
};

export default function WithdrawMoneyPage() {
  return (
    <article className="min-h-screen bg-primary" itemScope itemType="https://schema.org/Article">
      <section className="relative py-12 md:py-20 bg-secondary border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Cash Out Your W88 Game Balance in Pakistan
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              JazzCash, EasyPaisa and bank binding explained for secure withdrawals
            </p>
            <Link
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-accent/90 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              Download & Open Wallet
            </Link>
            <PhoneScreenshot
              src="/w88-game-guide.webp"
              alt="W88 Game account wallet showing the withdrawal shortcut and balance controls"
              title="W88 Game account and withdrawal controls"
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
                <Link href="/" className="text-accent hover:underline font-semibold">W88 Game</Link> keeps winnings inside the same PKR wallet you use for deposits. When your balance reflects table results and qualifying bonuses, you can send funds back to JazzCash, EasyPaisa or a bound bank card depending on what your profile allows. If the app is not on your phone yet, <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">download the official APK</a> and finish registration before your first cash-out.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                First-time withdrawals go smoother when payout details match the mobile number on your account. Many players run a small test cash-out before requesting larger amounts. You need an active balance from gameplay or promotions—see our guide to <Link href="/deposit-money-in-w88-game" className="text-accent hover:underline font-semibold">deposit money in W88 Game</Link> if your wallet is empty.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Step-by-Step Cash-Out Flow
            </h2>

            <ol className="space-y-8 list-none">
              <li className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1C1814] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6" aria-hidden="true">1</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Log In and Open Wallet</h3>
                    <p className="text-gray-300 leading-relaxed">Launch W88 Game with your registered number and password or OTP. From Home or Profile, open Wallet to view your withdrawable balance and linked payout methods.</p>
                  </div>
                </div>
              </li>

              <li className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1C1814] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6" aria-hidden="true">2</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Tap Withdraw</h3>
                    <p className="text-gray-300 leading-relaxed">Choose Withdraw to start a cash-out request. The screen shows minimum and maximum limits, available channels and any profile checks still pending.</p>
                  </div>
                </div>
              </li>

              <li className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1C1814] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6" aria-hidden="true">3</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Bind JazzCash, EasyPaisa or Bank</h3>
                    <p className="text-gray-300 leading-relaxed">If no payout method is saved, bind JazzCash or EasyPaisa first. Bank card users can link an account under Wallet → Withdrawal → Bank Card with account number, name and email on file.</p>
                  </div>
                </div>
              </li>

              <li className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1C1814] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6" aria-hidden="true">4</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Enter an Allowed Amount</h3>
                    <p className="text-gray-300 leading-relaxed">Type a value within the on-screen limits—many accounts support withdrawals from around Rs 100 upward, while bank routes may cap single requests near PKR 20,000. Confirm you are not withdrawing promo-locked balance.</p>
                  </div>
                </div>
              </li>

              <li className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1C1814] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6" aria-hidden="true">5</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Select Your Payout Channel</h3>
                    <p className="text-gray-300 leading-relaxed">Pick the bound JazzCash, EasyPaisa or bank method you want this request to use. Matching names and numbers across account and payout details reduces rejection rates.</p>
                  </div>
                </div>
              </li>

              <li className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1C1814] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6" aria-hidden="true">6</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Review Details and Submit</h3>
                    <p className="text-gray-300 leading-relaxed">Double-check amount, fees if shown and destination wallet or account. Submit only when every field is correct—wrong account numbers are the most common fixable mistake.</p>
                  </div>
                </div>
              </li>

              <li className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1C1814] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6" aria-hidden="true">7</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Wait for Processing</h3>
                    <p className="text-gray-300 leading-relaxed">Most wallet withdrawals process within a few hours, though some requests take up to 24 hours during peak traffic or network delays. Keep the app installed until status updates.</p>
                  </div>
                </div>
              </li>

              <li className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1C1814] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6" aria-hidden="true">8</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Verify Receipt in Your Wallet</h3>
                    <p className="text-gray-300 leading-relaxed">Open JazzCash, EasyPaisa or your bank app to confirm the transfer landed. If nothing arrives after the stated window, open transaction history inside W88 Game and contact support with the request ID.</p>
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
              Faster, Fewer Failed Payouts
            </h2>
            <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-300">Bind payout details early—before your first large win—so you are not rushing fields under time pressure.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-300">Run a small test withdrawal first to confirm JazzCash or EasyPaisa routing works on your account.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-300">Update the APK from the official source so withdrawal screens match current limits.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-300">Complete any profile or security checks shown in the wallet area before requesting big amounts.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-300">Contact in-app support with screenshots if a request stays pending beyond the usual window.</span>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">After the Transfer Lands</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Successful cash-outs confirm that your bound wallet or bank details are correct—save that method for future requests. Remember that promo balances may carry wagering rules before they become withdrawable, and gameplay results vary so not every session ends with a payout.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Keep transaction history handy for tax or personal records, and never share OTP codes with anyone posing as an agent or support rep outside the official in-app help paths.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Withdrawal Questions Answered
            </h2>
            <div className="space-y-6">
              <div className="bg-secondary rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-accent mb-3">
                  What is the minimum withdrawal on W88 Game?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Many accounts allow cash-outs from around Rs 100 upward, though exact limits appear inside the Withdraw screen and can differ by channel or profile status.
                </p>
              </div>

              <div className="bg-secondary rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-accent mb-3">
                  How long do W88 Game withdrawals take?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Wallet payouts often complete within a few hours, with some requests taking up to 24 hours. Peak network times or incomplete profile checks can extend processing.
                </p>
              </div>

              <div className="bg-secondary rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-accent mb-3">
                  What if my payout fails or stays pending?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Recheck bound account numbers, confirm no promo lock remains on the balance, then open in-app support with your withdrawal reference. Avoid submitting duplicate requests for the same amount.
                </p>
              </div>

              <div className="bg-secondary rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-accent mb-3">
                  How do I link a bank card for withdrawals?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Go to Wallet → Withdrawal → Bank Card, choose your bank, then enter account number, account holder name and email. After binding, bank routes may allow larger single requests up to about PKR 20,000 depending on current app limits.
                </p>
              </div>

              <div className="bg-secondary rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-accent mb-3">
                  Is there a maximum per withdrawal?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Bank card cash-outs often cap near PKR 20,000 per request, while JazzCash and EasyPaisa limits vary by account tier. Always read the live limits shown before you submit.
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
              Need the App on Your Phone?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Install the official APK, fund your wallet, and cash out through familiar Pakistani payment paths.
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
                "@id": "https://w88game.com.pk/withdraw-money-from-w88-game#article",
                "headline": "Cash Out Your W88 Game Balance in Pakistan",
                "description": "Step-by-step guide to withdraw PKR from W88 Game using JazzCash, EasyPaisa and bank binding.",
                "url": "https://w88game.com.pk/withdraw-money-from-w88-game",
                "image": {
                  "@type": "ImageObject",
                  "url": "https://w88game.com.pk/w88-game-guide.webp",
                  "contentUrl": "https://w88game.com.pk/w88-game-guide.webp",
                  "width": 794,
                  "height": 1408,
                  "caption": "W88 Game account wallet with withdrawal controls",
                  ...imageObjectLicensing
                },
                "articleBody": "W88 Game withdrawals send PKR to JazzCash, EasyPaisa or bound bank cards. Open Wallet, tap Withdraw, bind payout details, enter an allowed amount, submit, wait for processing, then verify receipt in your external wallet or bank app.",
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
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://w88game.com.pk/withdraw-money-from-w88-game" },
                "inLanguage": "en-US",
                "hasPart": {
                  "@type": "HowTo",
                  "@id": "https://w88game.com.pk/withdraw-money-from-w88-game#howto",
                  "name": "Cash Out from W88 Game"
                }
              },
              {
                "@type": "HowTo",
                "@id": "https://w88game.com.pk/withdraw-money-from-w88-game#howto",
                "name": "Cash Out Your W88 Game Balance",
                "description": "Withdraw PKR from W88 Game using JazzCash, EasyPaisa or bank binding.",
                "url": "https://w88game.com.pk/withdraw-money-from-w88-game",
                "totalTime": "PT5M",
                "estimatedCost": { "@type": "MonetaryAmount", "currency": "PKR", "value": "0" },
                "step": [
                  { "@type": "HowToStep", "name": "Log In and Open Wallet", "text": "Launch W88 Game and open Wallet from Home or Profile." },
                  { "@type": "HowToStep", "name": "Tap Withdraw", "text": "Start a cash-out request and review limits shown on screen." },
                  { "@type": "HowToStep", "name": "Bind JazzCash, EasyPaisa or Bank", "text": "Save payout details under Wallet if none are linked yet." },
                  { "@type": "HowToStep", "name": "Enter an Allowed Amount", "text": "Type a value within minimum and maximum withdrawal limits." },
                  { "@type": "HowToStep", "name": "Select Your Payout Channel", "text": "Choose JazzCash, EasyPaisa or your bound bank method." },
                  { "@type": "HowToStep", "name": "Review Details and Submit", "text": "Confirm amount and destination details, then submit the request." },
                  { "@type": "HowToStep", "name": "Wait for Processing", "text": "Allow time for the app to process—often within 24 hours." },
                  { "@type": "HowToStep", "name": "Verify Receipt in Your Wallet", "text": "Check JazzCash, EasyPaisa or your bank app for the transfer." }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://w88game.com.pk/withdraw-money-from-w88-game#faq",
                "mainEntity": [
                  { "@type": "Question", "name": "What is the minimum withdrawal on W88 Game?", "acceptedAnswer": { "@type": "Answer", "text": "Many accounts allow cash-outs from around Rs 100 upward, with exact limits shown inside the Withdraw screen." } },
                  { "@type": "Question", "name": "How long do W88 Game withdrawals take?", "acceptedAnswer": { "@type": "Answer", "text": "Wallet payouts often complete within a few hours, though some requests take up to 24 hours depending on network and profile checks." } },
                  { "@type": "Question", "name": "What if my payout fails or stays pending?", "acceptedAnswer": { "@type": "Answer", "text": "Recheck bound account details, confirm promo locks are cleared, and contact in-app support with your withdrawal reference." } },
                  { "@type": "Question", "name": "How do I link a bank card for withdrawals?", "acceptedAnswer": { "@type": "Answer", "text": "Go to Wallet → Withdrawal → Bank Card, select your bank, and enter account number, name and email to bind the card." } },
                  { "@type": "Question", "name": "Is there a maximum per withdrawal?", "acceptedAnswer": { "@type": "Answer", "text": "Bank card routes often cap near PKR 20,000 per request, while JazzCash and EasyPaisa limits vary—check live limits before submitting." } }
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
              { "@type": "ListItem", "position": 2, "name": "Withdraw Money from W88 Game", "item": "https://w88game.com.pk/withdraw-money-from-w88-game" }
            ]
          })
        }}
      />
    </article>
  );
}
