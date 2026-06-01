import { Metadata } from "next";
import { notFound } from "next/navigation";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import AreaNichePage from "@/components/AreaNichePage";
import { getNicheBySlug, niches, keywordToTitle } from "@/lib/data";
import { VADODARA_AREAS, getAreaBySlug } from "@/lib/areas";
import { withSuffix } from "@/lib/data";

export const dynamicParams = true;

export function generateStaticParams() {
  // Area × Service params (28,680)
  const areaParams = VADODARA_AREAS.flatMap(area =>
    niches.map(niche => ({ niche: area.slug, keyword: niche.slug }))
  );
  return areaParams;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ niche: string; keyword: string }>;
}): Promise<Metadata> {
  const { niche: seg1, keyword: seg2 } = await params;

  // Area page?
  const area = getAreaBySlug(seg1);
  const nicheForArea = area ? getNicheBySlug(seg2) : null;
  if (area && nicheForArea) {
    const svc = withSuffix(nicheForArea.name, "Services");
    const yr = new Date().getFullYear();
    const title = `Best ${svc} in ${area.name} Vadodara | VadodaraExperts`;
    const desc = `Top ${svc} in ${area.name} Vadodara. Certified experts, same-day service & free estimate. 500+ happy customers!`;
    return {
      title,
      description: desc,
      keywords: `${svc} ${area.name}, ${nicheForArea.name} in ${area.name} Vadodara, best ${nicheForArea.name} ${area.name}, ${nicheForArea.name} near me ${area.name}, ${nicheForArea.name} ${area.name} price`,
      alternates: { canonical: `https://vadodaraexperts.com/${seg1}/${seg2}` },
      openGraph: { title, description: desc, url: `https://vadodaraexperts.com/${seg1}/${seg2}`, siteName: "VadodaraExperts", locale: "en_IN", type: "website" },
    };
  }

  // Keyword page
  const niche = getNicheBySlug(seg1);
  if (!niche) return {};
  const title = keywordToTitle(niche.slug, niche.name, seg2);
  const yr = new Date().getFullYear();
  return {
    title: `${title} in Vadodara | VadodaraExperts`,
    description: `${title} in Vadodara. Certified experts, same-day service, free estimate. Call now!`,
    keywords: `${title} Vadodara, ${niche.name} near me, ${niche.name} Vadodara price, best ${niche.name} Vadodara, ${niche.name} contact number`,
    alternates: { canonical: `https://vadodaraexperts.com/${seg1}/${seg2}` },
    openGraph: { title: `${title} in Vadodara ${yr} | VadodaraExperts`, description: `${title} Vadodara — certified experts, best price, same-day service.`, url: `https://vadodaraexperts.com/${seg1}/${seg2}`, siteName: "VadodaraExperts", locale: "en_IN", type: "website" },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ niche: string; keyword: string }>;
}) {
  const { niche: seg1, keyword: seg2 } = await params;

  // Check if this is an area + service page
  const area = getAreaBySlug(seg1);
  const nicheForArea = area ? getNicheBySlug(seg2) : null;
  if (area && nicheForArea) {
    return <AreaNichePage area={area} niche={nicheForArea} />;
  }

  // Keyword page
  const niche = getNicheBySlug(seg1);
  if (!niche) notFound();

  // Validate against generated keywords for this niche
  if (niche.keywords.length > 0 && !niche.keywords.includes(seg2)) notFound();

  return <KeywordPageTemplate niche={niche} keyword={seg2} />;
}
