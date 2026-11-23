import { BLOG_POSTS } from "@/content/blog-posts";

export const SITE_URL = "https://w88game.com.pk";
const LAST_MODIFIED = "2026-11-24";

export type SitemapImage = {
  path: string;
  title: string;
  caption: string;
};

export type SitemapPage = {
  path: string;
  lastModified: string;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
  images?: SitemapImage[];
};

const corePages: SitemapPage[] = [
  {
    path: "/",
    lastModified: LAST_MODIFIED,
    changeFrequency: "daily",
    priority: 1,
    images: [
      {
        path: "/w88-game-logo.webp",
        title: "W88 Game official logo",
        caption: "Official W88 Game gold logo for Pakistan APK guide",
      },
      {
        path: "/w88game-hero-cover.webp",
        title: "W88 Game hero cover",
        caption: "Full-bleed W88 Game hero background cover artwork",
      },
      {
        path: "/W88-GAME-PAKISTAN-GUIDE.webp",
        title: "W88 Game Pakistan guide",
        caption: "Official W88 Game Pakistan APK guide banner",
      },
      {
        path: "/w88-game-guide.webp",
        title: "W88 Game brand guide",
        caption: "W88 Game brand artwork for Pakistan players",
      },
      {
        path: "/w88-game-100-welcome-bonus-promo.jpg",
        title: "W88 Game 100% Welcome Bonus promo",
        caption: "100% Welcome Bonus creative with USDT freebet and cash rebate",
      },
      {
        path: "/w88-game-new-member-50000-bonus-promo.jpg",
        title: "W88 Game New Member RS 50,000 bonus promo",
        caption:
          "New Member 100% Bonus creative highlighting up to RS 50,000 for Pakistan",
      },
      {
        path: "/W88-GAME-PAKISTAN-studio.webp",
        title: "W88 Game live studio",
        caption: "W88 Game Pakistan live studio experience",
      },
      {
        path: "/W88-GAME-PAKISTAN-GUIDE-chest-frenzy.webp",
        title: "W88 Game Chest Frenzy",
        caption: "Chest Frenzy slot title on W88 Game",
      },
      {
        path: "/W88-GAME-PAKISTAN-GUIDE-heart-of-atlantis.webp",
        title: "W88 Game Heart of Atlantis",
        caption: "Heart of Atlantis slot title on W88 Game",
      },
      {
        path: "/W88-GAME-PAKISTAN-GUIDEw88-PRDEPL26.webp",
        title: "W88 Game promotions",
        caption: "W88 Game Pakistan promotion and deposit offer art",
      },
    ],
  },
  {
    path: "/download-w88-game",
    lastModified: LAST_MODIFIED,
    changeFrequency: "weekly",
    priority: 0.9,
    images: [
      {
        path: "/W88-GAME-PAKISTAN-GUIDE.webp",
        title: "Download W88 Game APK",
        caption: "W88 Game Pakistan guide used on the download page",
      },
    ],
  },
  {
    path: "/deposit-money-in-w88-game",
    lastModified: LAST_MODIFIED,
    changeFrequency: "weekly",
    priority: 0.9,
    images: [
      {
        path: "/W88-GAME-PAKISTAN-GUIDEw88-PRDEPL26.webp",
        title: "Deposit money in W88 Game",
        caption: "W88 Game deposit and promotion artwork",
      },
    ],
  },
  {
    path: "/withdraw-money-from-w88-game",
    lastModified: LAST_MODIFIED,
    changeFrequency: "weekly",
    priority: 0.9,
    images: [
      {
        path: "/w88-game-guide.webp",
        title: "Withdraw money from W88 Game",
        caption: "W88 Game brand guide used on the withdrawal page",
      },
    ],
  },
  {
    path: "/w88-game-for-pc",
    lastModified: LAST_MODIFIED,
    changeFrequency: "weekly",
    priority: 0.8,
    images: [
      {
        path: "/W88-GAME-PAKISTAN-studio.webp",
        title: "W88 Game for PC",
        caption: "W88 Game studio lobby for PC emulator play",
      },
    ],
  },
  {
    path: "/about-us",
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.7,
    images: [
      {
        path: "/w88-game-guide.webp",
        title: "About the W88 Game APK guide",
        caption: "W88 Game brand artwork used by the independent APK guide",
      },
    ],
  },
  {
    path: "/blog",
    lastModified: LAST_MODIFIED,
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/contact-us",
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/privacy",
    lastModified: LAST_MODIFIED,
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    path: "/disclaimer",
    lastModified: LAST_MODIFIED,
    changeFrequency: "yearly",
    priority: 0.5,
  },
];

const blogImages: Record<string, SitemapImage[]> = {
  "w88-game-registration-login-guide": [
    {
      path: "/w88-game-guide.webp",
      title: "W88 Game registration and login",
      caption: "W88 Game brand guide used for account and login articles",
    },
  ],
  "w88-game-bonuses-vip-referral-guide": [
    {
      path: "/W88-GAME-PAKISTAN-GUIDEw88-PRDEPL26.webp",
      title: "W88 Game bonuses and referral rewards",
      caption: "W88 Game promotion artwork for bonus and VIP guides",
    },
  ],
  "is-w88-game-safe-pakistan": [
    {
      path: "/W88-GAME-PAKISTAN-GUIDE.webp",
      title: "W88 Game safety checks",
      caption: "W88 Game Pakistan guide used when reviewing safety topics",
    },
  ],
  "w88-game-jazzcash-easypaisa-guide": [
    {
      path: "/W88-GAME-PAKISTAN-GUIDEw88-PRDEPL26.webp",
      title: "W88 Game JazzCash and EasyPaisa",
      caption: "W88 Game deposit artwork for JazzCash and EasyPaisa guide",
    },
  ],
};

const blogPages: SitemapPage[] = BLOG_POSTS.map((post) => ({
  path: `/blog/${post.slug}`,
  lastModified: post.modified,
  changeFrequency: "monthly" as const,
  priority: 0.7,
  images: blogImages[post.slug],
}));

export const SITEMAP_PAGES = [...corePages, ...blogPages];

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

export function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}
