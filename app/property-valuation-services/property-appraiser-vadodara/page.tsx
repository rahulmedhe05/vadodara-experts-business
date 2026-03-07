import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-valuation-services")!;

export const metadata: Metadata = {
  title: "Property appraiser in Vadodara | Property Valuation Services | VadodaraExperts",
  description: "Professional property appraiser services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-valuation-services/property-appraiser-vadodara" },
  openGraph: {
    title: "Property appraiser in Vadodara | VadodaraExperts",
    description: "Professional property appraiser services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-valuation-services/property-appraiser-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-appraiser-vadodara" />;
}
