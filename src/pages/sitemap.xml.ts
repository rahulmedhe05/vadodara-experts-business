import type { APIRoute } from 'astro';
import { niches } from '@/lib/data';
import { VADODARA_AREAS } from '@/lib/areas';
import { getNicheKeywordSlugs } from '@/lib/niche-keywords';

export const prerender = false;

const SITE = "https://vadodaraexperts.com";
const BATCH = 5000;

function buildAllUrls(): string[] {
  const urls: string[] = ["/", "/about", "/contact"];
  
  // 1. Core category hub pages
  for (const n of niches) {
    urls.push(`/${n.slug}`);
  }
  
  // 2. All deep niche keyword routes (95,700 URLs)
  for (const n of niches) {
    const kws = getNicheKeywordSlugs(n.slug);
    for (const kw of kws) {
      urls.push(`/${n.slug}/${kw}`);
    }
  }
  
  // 3. Local area niche combinations (28,710 URLs)
  for (const area of VADODARA_AREAS) {
    for (const n of niches) {
      urls.push(`/${area.slug}/${n.slug}`);
    }
  }
  
  return urls;
}

export const GET: APIRoute = async () => {
  const allUrls = buildAllUrls();
  const count = Math.ceil(allUrls.length / BATCH);
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  for (let i = 0; i < count; i++) {
    xml += '  <sitemap>\n';
    xml += `    <loc>${SITE}/sitemap/${i}.xml</loc>\n`;
    xml += '  </sitemap>\n';
  }
  xml += '</sitemapindex>\n';

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
};
