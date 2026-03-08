import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-valuation-services")!;

export const metadata: Metadata = {
  title: "Valuation report in Vadodara | Property Valuation Services | VadodaraExperts",
  description: "Professional valuation report services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-valuation-services/valuation-report-vadodara" },
  openGraph: {
    title: "Valuation report in Vadodara | VadodaraExperts",
    description: "Professional valuation report services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-valuation-services/valuation-report-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="valuation-report-vadodara" />;
}
