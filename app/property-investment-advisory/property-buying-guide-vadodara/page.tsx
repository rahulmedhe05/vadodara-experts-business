import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-investment-advisory")!;

export const metadata: Metadata = {
  title: "property buying guide in Vadodara | Property Investment Advisory | VadodaraExperts",
  description: "Professional property buying guide services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-investment-advisory/property-buying-guide-vadodara" },
  openGraph: {
    title: "property buying guide in Vadodara | VadodaraExperts",
    description: "Professional property buying guide services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-investment-advisory/property-buying-guide-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-buying-guide-vadodara" />;
}
