import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-investment-consultancy")!;

export const metadata: Metadata = {
  title: "comparative market analysis in Vadodara | Real Estate Investment Consultancy | VadodaraExperts",
  description: "Professional comparative market analysis services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-investment-consultancy/comparative-market-analysis-vadodara" },
  openGraph: {
    title: "comparative market analysis in Vadodara | VadodaraExperts",
    description: "Professional comparative market analysis services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-investment-consultancy/comparative-market-analysis-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="comparative-market-analysis-vadodara" />;
}
