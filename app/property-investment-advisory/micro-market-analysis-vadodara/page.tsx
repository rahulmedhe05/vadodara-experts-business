import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-investment-advisory")!;

export const metadata: Metadata = {
  title: "micro market analysis in Vadodara | Property Investment Advisory | VadodaraExperts",
  description: "Professional micro market analysis services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-investment-advisory/micro-market-analysis-vadodara" },
  openGraph: {
    title: "micro market analysis in Vadodara | VadodaraExperts",
    description: "Professional micro market analysis services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-investment-advisory/micro-market-analysis-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="micro-market-analysis-vadodara" />;
}
