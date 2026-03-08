import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproofing-services")!;

export const metadata: Metadata = {
  title: "Asian Paints SmartCare waterproofing in Vadodara | Waterproofing Services | VadodaraExperts",
  description: "Professional asian paints smartcare waterproofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproofing-services/asian-paints-smartcare-waterproofing-vadodara" },
  openGraph: {
    title: "Asian Paints SmartCare waterproofing in Vadodara | VadodaraExperts",
    description: "Professional asian paints smartcare waterproofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproofing-services/asian-paints-smartcare-waterproofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="asian-paints-smartcare-waterproofing-vadodara" />;
}
