import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-valuation-services")!;

export const metadata: Metadata = {
  title: "Valuation for merger in Vadodara | Property Valuation Services | VadodaraExperts",
  description: "Professional valuation for merger services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-valuation-services/valuation-for-merger-vadodara" },
  openGraph: {
    title: "Valuation for merger in Vadodara | VadodaraExperts",
    description: "Professional valuation for merger services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-valuation-services/valuation-for-merger-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="valuation-for-merger-vadodara" />;
}
