import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-valuation-services")!;

export const metadata: Metadata = {
  title: "Valuation for acquisition in Vadodara | Property Valuation Services | VadodaraExperts",
  description: "Professional valuation for acquisition services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-valuation-services/valuation-for-acquisition-vadodara" },
  openGraph: {
    title: "Valuation for acquisition in Vadodara | VadodaraExperts",
    description: "Professional valuation for acquisition services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-valuation-services/valuation-for-acquisition-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="valuation-for-acquisition-vadodara" />;
}
