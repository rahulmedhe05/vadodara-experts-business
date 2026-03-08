import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-agents")!;

export const metadata: Metadata = {
  title: "Property Gotri in Vadodara | Real Estate Agents | VadodaraExperts",
  description: "Professional property gotri services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-agents/property-gotri-vadodara" },
  openGraph: {
    title: "Property Gotri in Vadodara | VadodaraExperts",
    description: "Professional property gotri services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-agents/property-gotri-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-gotri-vadodara" />;
}
