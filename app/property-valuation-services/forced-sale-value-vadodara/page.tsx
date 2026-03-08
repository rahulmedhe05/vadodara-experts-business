import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-valuation-services")!;

export const metadata: Metadata = {
  title: "Forced sale value in Vadodara | Property Valuation Services | VadodaraExperts",
  description: "Professional forced sale value services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-valuation-services/forced-sale-value-vadodara" },
  openGraph: {
    title: "Forced sale value in Vadodara | VadodaraExperts",
    description: "Professional forced sale value services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-valuation-services/forced-sale-value-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="forced-sale-value-vadodara" />;
}
