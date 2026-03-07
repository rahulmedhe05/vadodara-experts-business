import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-valuation-services")!;

export const metadata: Metadata = {
  title: "Wealth tax valuation in Vadodara | Property Valuation Services | VadodaraExperts",
  description: "Professional wealth tax valuation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-valuation-services/wealth-tax-valuation-vadodara" },
  openGraph: {
    title: "Wealth tax valuation in Vadodara | VadodaraExperts",
    description: "Professional wealth tax valuation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-valuation-services/wealth-tax-valuation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wealth-tax-valuation-vadodara" />;
}
