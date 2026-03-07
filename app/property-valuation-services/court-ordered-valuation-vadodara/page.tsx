import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-valuation-services")!;

export const metadata: Metadata = {
  title: "Court ordered valuation in Vadodara | Property Valuation Services | VadodaraExperts",
  description: "Professional court ordered valuation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-valuation-services/court-ordered-valuation-vadodara" },
  openGraph: {
    title: "Court ordered valuation in Vadodara | VadodaraExperts",
    description: "Professional court ordered valuation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-valuation-services/court-ordered-valuation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="court-ordered-valuation-vadodara" />;
}
