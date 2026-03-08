import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-agents")!;

export const metadata: Metadata = {
  title: "Resale property in Vadodara | Real Estate Agents | VadodaraExperts",
  description: "Professional resale property services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-agents/resale-property-vadodara" },
  openGraph: {
    title: "Resale property in Vadodara | VadodaraExperts",
    description: "Professional resale property services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-agents/resale-property-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="resale-property-vadodara" />;
}
