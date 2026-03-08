import { Metadata } from "next";
import { notFound } from "next/navigation";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug, niches, slugToTitle, withSuffix } from "@/lib/data";
import { getNicheKeywordSlugs } from "@/lib/niche-keywords";

export const dynamicParams = true;

export function generateStaticParams() {
  // Only pre-build a few keywords per niche to keep build fast
  // Rest will be generated on first visit (ISR)
  return [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ niche: string; keyword: string }>;
}): Promise<Metadata> {
  const { niche: nicheSlug, keyword } = await params;
  const niche = getNicheBySlug(nicheSlug);
  if (!niche) return {};

  const title = slugToTitle(keyword.replace(/-vadodara$/, ""));
  const pageTitle = `${title} in Vadodara | ${niche.name} | VadodaraExperts`;
  const description = `Professional ${title.toLowerCase()} services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.`;
  const url = `https://vadodaraexperts.com/${niche.slug}/${keyword}`;

  return {
    title: pageTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} in Vadodara | VadodaraExperts`,
      description: `Professional ${title.toLowerCase()} services in Vadodara from verified experts.`,
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
  params: Promise<{ niche: string; keyword: string }>;
}) {
  const { niche: nicheSlug, keyword } = await params;
  const niche = getNicheBySlug(nicheSlug);
  if (!niche) notFound();

  // Validate keyword belongs to this niche
  const validKeywords = getNicheKeywordSlugs(niche.slug);
  if (validKeywords.length > 0 && !validKeywords.includes(keyword)) {
    notFound();
  }

  return <KeywordPageTemplate niche={niche} keyword={keyword} />;
}
