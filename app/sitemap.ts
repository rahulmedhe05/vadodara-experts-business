import { getAllUrls } from "@/lib/data";
import { MetadataRoute } from "next";

const SITE = "https://vadodaraexperts.com";
const URLS_PER_SITEMAP = 100;

// Generate multiple sitemaps: /sitemap/0.xml, /sitemap/1.xml, etc.
// Next.js automatically creates /sitemap.xml as the index
export async function generateSitemaps() {
  const urls = getAllUrls();
  const totalSitemaps = Math.ceil(urls.length / URLS_PER_SITEMAP);
  return Array.from({ length: totalSitemaps }, (_, i) => ({ id: i }));
}

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  const urls = getAllUrls();
  const start = id * URLS_PER_SITEMAP;
  const batch = urls.slice(start, start + URLS_PER_SITEMAP);

  return batch.map((url) => ({
    url: `${SITE}${url}`,
    lastModified: new Date(),
    changeFrequency: url === "/" ? "daily" : ("weekly" as const),
    priority: url === "/" ? 1.0 : url.split("/").length === 2 ? 0.8 : 0.6,
  }));
}
