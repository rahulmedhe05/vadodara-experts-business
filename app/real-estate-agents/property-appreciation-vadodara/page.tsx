import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-agents")!;

export const metadata: Metadata = {
  title: "Property appreciation in Vadodara | Real Estate Agents | VadodaraExperts",
  description: "Professional property appreciation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-agents/property-appreciation-vadodara" },
  openGraph: {
    title: "Property appreciation in Vadodara | VadodaraExperts",
    description: "Professional property appreciation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-agents/property-appreciation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-appreciation-vadodara" />;
}
