import Link from 'next/link';
import { DOWNLOAD_URL, FACEBOOK_URL } from '@/content/home';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-8 pb-2 px-4 md:px-8 border-t border-gray-800 relative z-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold text-accent mb-4">W88 Game</h2>
            <p className="text-sm text-gray-300 mb-4">
              W88 Game is Pakistan&apos;s go-to APK guide for slots, live casino, sports and fishing. Earn and withdraw with JazzCash &amp; EasyPaisa payments.
            </p>
            <div className="flex space-x-4">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="W88 Game on Facebook"
              >
                <svg
                  className="w-5 h-5 text-gray-400 hover:text-accent transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.77,7.46H14.5v-1.9c0-0.9,0.6-1.1,1-1.1h3V0.13H14.5c-4.1,0-5,2.9-5,4.8v2.5H6v4.5h3.5V22h5V11.96h3.35L18.77,7.46z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/download-w88-game" className="text-gray-300 hover:text-accent transition-colors">
                  Download
                </Link>
              </li>
              <li>
                <Link href="/w88-game-for-pc" className="text-gray-300 hover:text-accent transition-colors">
                  PC Version
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-300 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">Resources</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/deposit-money-in-w88-game" className="text-gray-300 hover:text-accent transition-colors">
                  Deposit Guide
                </Link>
              </li>
              <li>
                <Link href="/withdraw-money-from-w88-game" className="text-gray-300 hover:text-accent transition-colors">
                  Withdraw Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/w88-game-registration-login-guide" className="text-gray-300 hover:text-accent transition-colors">
                  Account &amp; Login
                </Link>
              </li>
              <li>
                <Link href="/blog/is-w88-game-safe-pakistan" className="text-gray-300 hover:text-accent transition-colors">
                  Safety Guide
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-300 hover:text-accent transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">Download App</h2>
            <p className="text-sm text-gray-300 mb-4">
              Download W88 Game to enjoy slots, live casino and sports action with real wallet play on your Android device.
            </p>
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download W88 Game app for Android"
              className="download-btn bg-transparent hover:bg-[#FF8A45]/10 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-all shadow-lg hover:shadow-xl border-2 border-[#FF8A45]"
            >
              <span>DOWNLOAD NOW</span>
              <div className="download-icon ml-2 bg-[#FF5C2B] rounded-full p-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-4 pb-3 text-center text-sm text-gray-400">
          <p className="mb-0">© 2026 W88 Game. All rights reserved. | <Link href="/" className="hover:text-accent">w88game.com.pk</Link></p>
        </div>
      </div>
    </footer>
  );
}
