import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-agents")!;

export const metadata: Metadata = {
  title: "Best location for investment in Vadodara | Real Estate Agents | VadodaraExperts",
  description: "Professional best location for investment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-agents/best-location-for-investment-vadodara" },
  openGraph: {
    title: "Best location for investment in Vadodara | VadodaraExperts",
    description: "Professional best location for investment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-agents/best-location-for-investment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-location-for-investment-vadodara" />;
}
