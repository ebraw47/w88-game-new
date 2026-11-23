import { NextResponse } from "next/server";
import {
  SITEMAP_PAGES,
  SITE_URL,
  absoluteUrl,
  escapeXml,
} from "@/lib/sitemapData";

export function GET() {
  const urls = SITEMAP_PAGES.filter((page) => page.images?.length)
    .map(
      (page) => `  <url>
    <loc>${escapeXml(absoluteUrl(page.path))}</loc>
${page.images
  ?.map(
    (image) => `    <image:image>
      <image:loc>${escapeXml(`${SITE_URL}${image.path}`)}</image:loc>
      <image:title>${escapeXml(image.title)}</image:title>
      <image:caption>${escapeXml(image.caption)}</image:caption>
    </image:image>`,
  )
  .join("\n")}
  </url>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
