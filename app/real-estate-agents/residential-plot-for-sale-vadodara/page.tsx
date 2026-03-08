import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-agents")!;

export const metadata: Metadata = {
  title: "Residential plot for sale in Vadodara | Real Estate Agents | VadodaraExperts",
  description: "Professional residential plot for sale services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-agents/residential-plot-for-sale-vadodara" },
  openGraph: {
    title: "Residential plot for sale in Vadodara | VadodaraExperts",
    description: "Professional residential plot for sale services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-agents/residential-plot-for-sale-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="residential-plot-for-sale-vadodara" />;
}
