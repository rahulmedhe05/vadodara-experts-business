import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-agents")!;

export const metadata: Metadata = {
  title: "Gated community in Vadodara | Real Estate Agents | VadodaraExperts",
  description: "Professional gated community services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-agents/gated-community-vadodara" },
  openGraph: {
    title: "Gated community in Vadodara | VadodaraExperts",
    description: "Professional gated community services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-agents/gated-community-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gated-community-vadodara" />;
}
