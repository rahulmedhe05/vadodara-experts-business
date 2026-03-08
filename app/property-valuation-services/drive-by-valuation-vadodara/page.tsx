import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-valuation-services")!;

export const metadata: Metadata = {
  title: "Drive by valuation in Vadodara | Property Valuation Services | VadodaraExperts",
  description: "Professional drive by valuation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-valuation-services/drive-by-valuation-vadodara" },
  openGraph: {
    title: "Drive by valuation in Vadodara | VadodaraExperts",
    description: "Professional drive by valuation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-valuation-services/drive-by-valuation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="drive-by-valuation-vadodara" />;
}
