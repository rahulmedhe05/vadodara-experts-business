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

export const GET: APIRoute = async ({ params }) => {
  const { id } = params;
  const index = parseInt(id || '0', 10);
  
  const all = buildAllUrls();
  const slice = all.slice(index * BATCH, (index + 1) * BATCH);
  const now = new Date().toISOString();

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  for (const url of slice) {
    const isHomepage = url === "/";
    const depth = url.split("/").length;
    const freq = isHomepage ? "daily" : depth === 2 ? "weekly" : "monthly";
    const prio = isHomepage ? "1.0" : depth === 2 ? "0.9" : "0.7";
    
    xml += '  <url>\n';
    xml += `    <loc>${SITE}${url}</loc>\n`;
    xml += `    <lastmod>${now}</lastmod>\n`;
    xml += `    <changefreq>${freq}</changefreq>\n`;
    xml += `    <priority>${prio}</priority>\n`;
    xml += '  </url>\n';
  }
  
  xml += '</urlset>\n';

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
};
