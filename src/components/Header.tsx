'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MobileNavigation from './MobileNavigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/download-w88-game', label: 'Download' },
  { href: '/deposit-money-in-w88-game', label: 'Deposit' },
  { href: '/withdraw-money-from-w88-game', label: 'Withdraw' },
  { href: '/w88-game-for-pc', label: 'PC Version' },
  { href: '/about-us', label: 'About Us' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact-us', label: 'Contact Us' },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header className="bg-primary py-3 px-4 md:px-8 sticky top-0 z-30 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-11 w-11 overflow-hidden rounded-lg bg-black">
            <Image
              src="/w88-game-logo.webp"
              alt="W88 Game Logo"
              width={44}
              height={44}
              className="object-contain h-11 w-11"
              priority={true}
              fetchPriority="high"
            />
          </div>
          <span className="text-accent text-xl md:text-2xl font-bold">
            W88 Game
          </span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative font-medium transition-colors pb-1 group ${
                isActive(href)
                  ? 'text-accent'
                  : 'text-white hover:text-accent'
              }`}
            >
              {label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-accent rounded-full transition-all duration-300 ${
                  isActive(href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </nav>

        <MobileNavigation />
      </div>
    </header>
  );
}
