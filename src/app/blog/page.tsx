import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/content/blog-posts";

export const metadata: Metadata = {
  title: "W88 Game Blog: Pakistan Account, Payment & Safety Guides",
  description:
    "Read three original W88 Game guides covering registration and login, bonuses and VIP levels, referral rewards, and safety checks for Pakistan.",
  keywords: [
    "W88 Game blog",
    "W88 Game registration",
    "W88 Game login",
    "W88 Game deposit",
    "W88 Game withdrawal",
    "W88 Game bonuses",
    "W88 Game safety Pakistan",
  ],
  alternates: {
    canonical: "https://w88game.com.pk/blog",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://w88game.com.pk/blog",
    title: "W88 Game Blog: Original Guides for Pakistan",
    description:
      "Original account, payment, bonus, and safety guides researched for W88 Game users in Pakistan.",
    images: [
      {
        url: "https://w88game.com.pk/feature/og-image.webp",
        width: 512,
        height: 512,
        alt: "W88 Game blog guides for Pakistan",
      },
    ],
  },
};

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="hover:text-accent">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-300" aria-current="page">
            Blog
          </li>
        </ol>
      </nav>

      <header className="mx-auto mb-10 max-w-4xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
          Original W88 Game research
        </p>
        <h1 className="mb-4 text-3xl font-bold text-accent md:text-5xl">
          W88 Game Blog
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-gray-300">
          Three focused guides answer the questions Pakistani users search most:
          account setup, promotional rules, referral rewards, and safety.
          Every article was written specifically for W88 Game from current search
          intent and product checks.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        {BLOG_POSTS.map((post, index) => (
          <article
            key={post.slug}
            className={`rounded-2xl bg-[#1C1814] p-7 transition hover:-translate-y-1 hover:shadow-xl ${
              index === 0
                ? "border-2 border-[#FFC933]"
                : "border-2 border-gray-700 hover:border-accent"
            }`}
          >
            <div className="mb-4 flex flex-wrap items-center gap-3">
              {index === 0 && (
                <span className="rounded-full bg-[#FFC933] px-3 py-1 text-xs font-bold text-[#100E0C]">
                  FEATURED
                </span>
              )}
              <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                {post.category}
              </span>
            </div>
            <h2 className="mb-4 text-2xl font-bold leading-tight text-white">
              {post.title}
            </h2>
            <p className="mb-5 leading-7 text-gray-300">{post.summary}</p>
            <div className="mb-5 flex flex-wrap gap-2 text-sm text-gray-400">
              <time dateTime={post.published}>July 19, 2026</time>
              <span aria-hidden="true">•</span>
              <span>{post.readTime}</span>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="font-semibold text-accent hover:underline"
            >
              Read guide →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
