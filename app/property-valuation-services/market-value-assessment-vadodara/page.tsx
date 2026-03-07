import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-valuation-services")!;

export const metadata: Metadata = {
  title: "Market value assessment in Vadodara | Property Valuation Services | VadodaraExperts",
  description: "Professional market value assessment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-valuation-services/market-value-assessment-vadodara" },
  openGraph: {
    title: "Market value assessment in Vadodara | VadodaraExperts",
    description: "Professional market value assessment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-valuation-services/market-value-assessment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="market-value-assessment-vadodara" />;
}
