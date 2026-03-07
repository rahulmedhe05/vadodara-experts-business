import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-agents")!;

export const metadata: Metadata = {
  title: "Corner plot for sale in Vadodara | Real Estate Agents | VadodaraExperts",
  description: "Professional corner plot for sale services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-agents/corner-plot-for-sale-vadodara" },
  openGraph: {
    title: "Corner plot for sale in Vadodara | VadodaraExperts",
    description: "Professional corner plot for sale services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-agents/corner-plot-for-sale-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="corner-plot-for-sale-vadodara" />;
}
