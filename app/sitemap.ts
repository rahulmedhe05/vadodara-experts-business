import type { MetadataRoute } from "next";
import { niches } from "@/lib/data";
import { VADODARA_AREAS } from "@/lib/areas";

const SITE = "https://vadodaraexperts.com";
const NOW = new Date();
const BATCH = 5000;

function buildAllUrls(): string[] {
  const urls: string[] = ["/", "/about", "/contact"];
  for (const n of niches) urls.push(`/${n.slug}`);
  for (const n of niches) for (const kw of n.keywords) urls.push(`/${n.slug}/${kw}`);
  for (const area of VADODARA_AREAS) for (const n of niches) urls.push(`/${area.slug}/${n.slug}`);
  return urls;
}

export async function generateSitemaps() {
  const count = Math.ceil(buildAllUrls().length / BATCH);
  return Array.from({ length: count }, (_, i) => ({ id: i }));
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
  const all = buildAllUrls();
  const slice = all.slice(id * BATCH, (id + 1) * BATCH);
  return slice.map((url) => ({
    url: `${SITE}${url}`,
    lastModified: NOW,
    changeFrequency: (url === "/" ? "daily" : url.split("/").length === 2 ? "weekly" : "monthly") as "daily" | "weekly" | "monthly",
    priority: url === "/" ? 1.0 : url.split("/").length === 2 ? 0.8 : 0.6,
  }));
}
