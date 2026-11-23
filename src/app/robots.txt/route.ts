import { NextResponse } from "next/server";
import { SITE_URL } from "@/lib/sitemapData";

export function GET() {
  const robots = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: Bingbot
Allow: /

User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Bytespider
Disallow: /

Sitemap: ${SITE_URL}/sitemap-index.xml
`;

  return new NextResponse(robots, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
