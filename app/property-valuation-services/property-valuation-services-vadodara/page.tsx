import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-valuation-services")!;

export const metadata: Metadata = {
  title: "Property valuation services in Vadodara | Property Valuation Services | VadodaraExperts",
  description: "Professional property valuation services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-valuation-services/property-valuation-services-vadodara" },
  openGraph: {
    title: "Property valuation services in Vadodara | VadodaraExperts",
    description: "Professional property valuation services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-valuation-services/property-valuation-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-valuation-services-vadodara" />;
}
