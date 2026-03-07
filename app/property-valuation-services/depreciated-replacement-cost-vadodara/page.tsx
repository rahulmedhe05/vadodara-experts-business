import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-valuation-services")!;

export const metadata: Metadata = {
  title: "Depreciated replacement cost in Vadodara | Property Valuation Services | VadodaraExperts",
  description: "Professional depreciated replacement cost services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-valuation-services/depreciated-replacement-cost-vadodara" },
  openGraph: {
    title: "Depreciated replacement cost in Vadodara | VadodaraExperts",
    description: "Professional depreciated replacement cost services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-valuation-services/depreciated-replacement-cost-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="depreciated-replacement-cost-vadodara" />;
}
