import { Metadata } from "next";
import { notFound } from "next/navigation";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug, niches, slugToTitle } from "@/lib/data";

export const dynamicParams = true;
export const revalidate = 86400; // ISR: rebuild once per day

// Only pre-build top 20 high-traffic services at build time
// Remaining 936 services built on first visit via ISR (faster Vercel build)
const TOP_SERVICES = [
  'ac-services','plumbing-services','electrical-services','pest-control-services',
  'home-cleaning-services','interior-design-services','civil-contractors',
  'carpenter-services','painting-contractors','waterproofing-services',
  'cctv-installation-services','solar-panel-installation','elevator-maintenance',
  'home-renovation-services','wedding-planning-services','catering-services',
  'digital-marketing-services','web-development-services','car-repair-services',
  'laptop-repair-services',
];
export function generateStaticParams() {
  return TOP_SERVICES.map(slug => ({ niche: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ niche: string }>;
}): Promise<Metadata> {
  const { niche: slug } = await params;
  const niche = getNicheBySlug(slug);
  if (!niche) return {};

  const yr = new Date().getFullYear();
  const title = `Best ${niche.name} in Vadodara | VadodaraExperts`;
  const description = `Top-rated ${niche.name} in Vadodara. Certified experts, same-day service, free estimate. 500+ happy customers!`;
  const url = `https://vadodaraexperts.com/${niche.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    keywords: `best ${niche.name} in Vadodara, ${niche.name} near me, ${niche.name} Vadodara price, ${niche.name} contact number Vadodara, affordable ${niche.name} Vadodara, top rated ${niche.name} Vadodara`,
    openGraph: {
      title,
      description: `Best ${niche.name} in Vadodara. Verified experts, affordable pricing, same-day service.`,
      url,
      siteName: "VadodaraExperts",
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ niche: string }>;
}) {
  const { niche: slug } = await params;
  const niche = getNicheBySlug(slug);
  if (!niche) notFound();

  return <NichePageTemplate niche={niche} />;
}
