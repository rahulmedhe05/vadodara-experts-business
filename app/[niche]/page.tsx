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

  const title = `${niche.name} in Vadodara | VadodaraExperts`;
  const description = `Find the best ${niche.name.toLowerCase()} in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.`;
  const url = `https://vadodaraexperts.com/${niche.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: `Find the best ${niche.name.toLowerCase()} in Vadodara. Verified experts, affordable pricing.`,
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
