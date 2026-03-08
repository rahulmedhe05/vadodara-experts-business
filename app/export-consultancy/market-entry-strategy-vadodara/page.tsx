import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("export-consultancy")!;

export const metadata: Metadata = {
  title: "Market entry strategy in Vadodara | Export Consultancy | VadodaraExperts",
  description: "Professional market entry strategy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/export-consultancy/market-entry-strategy-vadodara" },
  openGraph: {
    title: "Market entry strategy in Vadodara | VadodaraExperts",
    description: "Professional market entry strategy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/export-consultancy/market-entry-strategy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="market-entry-strategy-vadodara" />;
}
