import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-valuation-services")!;

export const metadata: Metadata = {
  title: "Showroom valuation in Vadodara | Property Valuation Services | VadodaraExperts",
  description: "Professional showroom valuation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-valuation-services/showroom-valuation-vadodara" },
  openGraph: {
    title: "Showroom valuation in Vadodara | VadodaraExperts",
    description: "Professional showroom valuation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-valuation-services/showroom-valuation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="showroom-valuation-vadodara" />;
}
