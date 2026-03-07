import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-valuation-services")!;

export const metadata: Metadata = {
  title: "Fair market value in Vadodara | Property Valuation Services | VadodaraExperts",
  description: "Professional fair market value services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-valuation-services/fair-market-value-vadodara" },
  openGraph: {
    title: "Fair market value in Vadodara | VadodaraExperts",
    description: "Professional fair market value services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-valuation-services/fair-market-value-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fair-market-value-vadodara" />;
}
