import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-agents")!;

export const metadata: Metadata = {
  title: "Property Waghodia Road in Vadodara | Real Estate Agents | VadodaraExperts",
  description: "Professional property waghodia road services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-agents/property-waghodia-road-vadodara" },
  openGraph: {
    title: "Property Waghodia Road in Vadodara | VadodaraExperts",
    description: "Professional property waghodia road services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-agents/property-waghodia-road-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-waghodia-road-vadodara" />;
}
