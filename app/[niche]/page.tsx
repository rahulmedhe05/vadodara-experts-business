import { Metadata } from "next";
import { notFound } from "next/navigation";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug, niches, slugToTitle } from "@/lib/data";

export const dynamicParams = true;

export function generateStaticParams() {
  return niches.map((n) => ({ niche: n.slug }));
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
  const title = `Best ${niche.name} in Vadodara — Top Rated Experts ${yr} | VadodaraExperts`;
  const description = `Looking for ${niche.name} in Vadodara? ✅ Certified professionals ✅ Affordable prices ✅ Same-day service ✅ 500+ happy customers. Get free estimate now! Best ${niche.name} near me Vadodara.`;
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
