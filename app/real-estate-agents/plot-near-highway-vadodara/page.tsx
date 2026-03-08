import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-agents")!;

export const metadata: Metadata = {
  title: "Plot near highway in Vadodara | Real Estate Agents | VadodaraExperts",
  description: "Professional plot near highway services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-agents/plot-near-highway-vadodara" },
  openGraph: {
    title: "Plot near highway in Vadodara | VadodaraExperts",
    description: "Professional plot near highway services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-agents/plot-near-highway-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plot-near-highway-vadodara" />;
}
