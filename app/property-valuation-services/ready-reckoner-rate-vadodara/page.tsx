import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-valuation-services")!;

export const metadata: Metadata = {
  title: "Ready reckoner rate in Vadodara | Property Valuation Services | VadodaraExperts",
  description: "Professional ready reckoner rate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-valuation-services/ready-reckoner-rate-vadodara" },
  openGraph: {
    title: "Ready reckoner rate in Vadodara | VadodaraExperts",
    description: "Professional ready reckoner rate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-valuation-services/ready-reckoner-rate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ready-reckoner-rate-vadodara" />;
}
