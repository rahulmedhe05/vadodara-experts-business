import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-valuation-services")!;

export const metadata: Metadata = {
  title: "Property valuation certificate in Vadodara | Property Valuation Services | VadodaraExperts",
  description: "Professional property valuation certificate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-valuation-services/property-valuation-certificate-vadodara" },
  openGraph: {
    title: "Property valuation certificate in Vadodara | VadodaraExperts",
    description: "Professional property valuation certificate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-valuation-services/property-valuation-certificate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-valuation-certificate-vadodara" />;
}
