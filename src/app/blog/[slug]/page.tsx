import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogPostSchema from "@/components/BlogPostSchema";
import PhoneScreenshot from "@/components/PhoneScreenshot";
import {
  BLOG_POSTS,
  getBlogPost,
  type BlogInternalLink,
} from "@/content/blog-posts";

type Props = {
  params: Promise<{ slug: string }>;
};

const BLOG_IMAGES = {
  "w88-game-registration-login-guide": {
    src: "/w88-game-guide.webp",
    alt: "W88 Game brand guide used for registration and login management",
    title: "W88 Game account and login guide art",
    width: 850,
    height: 395,
  },
  "w88-game-bonuses-vip-referral-guide": {
    src: "/W88-GAME-PAKISTAN-GUIDEw88-PRDEPL26.webp",
    alt: "W88 Game promotion artwork for bonuses and referral rewards",
    title: "W88 Game bonuses and referral rewards art",
    width: 850,
    height: 395,
  },
  "is-w88-game-safe-pakistan": {
    src: "/W88-GAME-PAKISTAN-GUIDE.webp",
    alt: "W88 Game Pakistan guide used when checking app offers and account safety",
    title: "W88 Game safety guide artwork",
    width: 850,
    height: 395,
  },
  "w88-game-jazzcash-easypaisa-guide": {
    src: "/W88-GAME-PAKISTAN-GUIDEw88-PRDEPL26.webp",
    alt: "W88 Game deposit artwork for JazzCash and EasyPaisa wallet guide",
    title: "W88 Game JazzCash and EasyPaisa guide art",
    width: 850,
    height: 395,
  },
} as const;

function renderInternalLinks(
  text: string,
  links: BlogInternalLink[],
  usedHrefs: Set<string>,
): ReactNode[] {
  const nodes: ReactNode[] = [];
  let cursor = 0;

  while (cursor < text.length) {
    const nextLink = links
      .filter((link) => !usedHrefs.has(link.href))
      .map((link) => ({
        ...link,
        index: text.indexOf(link.phrase, cursor),
      }))
      .filter((link) => link.index >= 0)
      .sort((a, b) => a.index - b.index)[0];

    if (!nextLink) {
      nodes.push(text.slice(cursor));
      break;
    }

    if (nextLink.index > cursor) {
      nodes.push(text.slice(cursor, nextLink.index));
    }

    nodes.push(
      <Link
        key={`${nextLink.href}-${nextLink.index}`}
        href={nextLink.href}
        className="font-semibold text-accent hover:underline"
      >
        {nextLink.phrase}
      </Link>,
    );
    usedHrefs.add(nextLink.href);
    cursor = nextLink.index + nextLink.phrase.length;
  }

  return nodes;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  const url = `https://w88game.com.pk/blog/${post.slug}`;
  const image = BLOG_IMAGES[post.slug as keyof typeof BLOG_IMAGES];
  const imageUrl = image
    ? `https://w88game.com.pk${image.src}`
    : "https://w88game.com.pk/feature/og-image.webp";

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
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
      type: "article",
      url,
      title: post.title,
      description: post.description,
      siteName: "W88 Game",
      locale: "en_PK",
      publishedTime: post.published,
      modifiedTime: post.modified,
      images: [
        {
          url: imageUrl,
          width: image?.width ?? 512,
          height: image?.height ?? 512,
          alt: image?.alt ?? post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const image = BLOG_IMAGES[post.slug as keyof typeof BLOG_IMAGES];
  const imageUrl = image
    ? `https://w88game.com.pk${image.src}`
    : "https://w88game.com.pk/feature/og-image.webp";

  const articleBody = post.sections
    .flatMap((section) => [
      section.heading,
      ...section.paragraphs,
      ...(section.bullets ?? []),
    ])
    .join("\n");

  const relatedPosts = post.relatedSlugs
    .map((relatedSlug) => getBlogPost(relatedSlug))
    .filter((related): related is NonNullable<typeof related> => Boolean(related));
  const usedInternalHrefs = new Set<string>();

  return (
    <>
      <BlogPostSchema
        title={post.title}
        description={post.description}
        slug={post.slug}
        datePublished={post.published}
        dateModified={post.modified}
        image={imageUrl}
        articleBody={articleBody}
      />

      <main className="container mx-auto px-4 py-12">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-accent">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/blog" className="hover:text-accent">
                Blog
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-300" aria-current="page">
              {post.title}
            </li>
          </ol>
        </nav>

        <article className="mx-auto max-w-4xl rounded-2xl border border-gray-800 bg-[#1C1814] p-6 shadow-xl md:p-10">
          <header className="mb-8 border-b border-gray-700 pb-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
              {post.category}
            </p>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white md:text-5xl">
              {post.title}
            </h1>
            <p className="mb-5 text-lg leading-8 text-gray-300">{post.summary}</p>
            <div className="flex flex-wrap gap-3 text-sm text-gray-400">
              <time dateTime={post.published}>Published July 19, 2026</time>
              <span aria-hidden="true">•</span>
              <span>{post.readTime}</span>
              <span aria-hidden="true">•</span>
              <span>W88 Game Editorial</span>
            </div>
          </header>

          {image && (
            <PhoneScreenshot
              src={image.src}
              alt={image.alt}
              title={image.title}
              width={image.width}
              height={image.height}
              priority
              className="mb-12"
            />
          )}

          <div className="space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="mb-4 text-2xl font-bold text-[#FFC933] md:text-3xl">
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-8 text-gray-300 md:text-lg"
                    >
                      {renderInternalLinks(
                        paragraph,
                        post.internalLinks,
                        usedInternalHrefs,
                      )}
                    </p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="mt-5 list-disc space-y-2 pl-6 text-gray-300">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <aside className="mt-10 rounded-xl border border-yellow-500/40 bg-yellow-500/10 p-5">
            <h2 className="mb-2 text-xl font-bold text-accent">
              Responsible-use reminder
            </h2>
            <p className="text-gray-300">
              W88 Game includes real-money features and therefore carries a risk
              of financial loss. Use only money you can afford to lose, never
              share an OTP or wallet PIN, and stop if play is affecting your
              finances or wellbeing. Adults 18+ only.
            </p>
          </aside>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/download-w88-game"
              className="download-btn inline-flex items-center rounded-full border-2 border-[#FF8A45] px-6 py-3 font-bold text-white hover:bg-[#FF8A45]/10"
            >
              Download Guide
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center rounded-full border border-gray-600 px-6 py-3 font-semibold text-gray-200 hover:border-accent hover:text-accent"
            >
              All Blog Guides
            </Link>
          </div>
        </article>

        <section className="mx-auto mt-10 max-w-4xl">
          <h2 className="mb-5 text-2xl font-bold text-accent">
            Related W88 Game guides
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="rounded-xl border border-gray-700 bg-[#1C1814] p-5 transition hover:-translate-y-1 hover:border-accent"
              >
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">
                  {related.category}
                </p>
                <h3 className="mb-2 text-lg font-bold text-white">
                  {related.title}
                </h3>
                <p className="text-sm leading-6 text-gray-400">
                  {related.summary}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
