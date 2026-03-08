import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-investment-advisory")!;

export const metadata: Metadata = {
  title: "property due diligence advisory in Vadodara | Property Investment Advisory | VadodaraExperts",
  description: "Professional property due diligence advisory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-investment-advisory/property-due-diligence-advisory-vadodara" },
  openGraph: {
    title: "property due diligence advisory in Vadodara | VadodaraExperts",
    description: "Professional property due diligence advisory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-investment-advisory/property-due-diligence-advisory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-due-diligence-advisory-vadodara" />;
}
