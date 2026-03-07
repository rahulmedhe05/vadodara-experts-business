import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-investment-advisory")!;

export const metadata: Metadata = {
  title: "location analysis property in Vadodara | Property Investment Advisory | VadodaraExperts",
  description: "Professional location analysis property services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-investment-advisory/location-analysis-property-vadodara" },
  openGraph: {
    title: "location analysis property in Vadodara | VadodaraExperts",
    description: "Professional location analysis property services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-investment-advisory/location-analysis-property-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="location-analysis-property-vadodara" />;
}
