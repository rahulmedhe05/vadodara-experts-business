import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-valuation-services")!;

export const metadata: Metadata = {
  title: "Valuation for balance sheet in Vadodara | Property Valuation Services | VadodaraExperts",
  description: "Professional valuation for balance sheet services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-valuation-services/valuation-for-balance-sheet-vadodara" },
  openGraph: {
    title: "Valuation for balance sheet in Vadodara | VadodaraExperts",
    description: "Professional valuation for balance sheet services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-valuation-services/valuation-for-balance-sheet-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="valuation-for-balance-sheet-vadodara" />;
}
