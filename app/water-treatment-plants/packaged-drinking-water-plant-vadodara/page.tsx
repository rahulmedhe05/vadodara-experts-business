import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-treatment-plants")!;

export const metadata: Metadata = {
  title: "packaged drinking water plant in Vadodara | Water Treatment Plants | VadodaraExperts",
  description: "Professional packaged drinking water plant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-treatment-plants/packaged-drinking-water-plant-vadodara" },
  openGraph: {
    title: "packaged drinking water plant in Vadodara | VadodaraExperts",
    description: "Professional packaged drinking water plant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-treatment-plants/packaged-drinking-water-plant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="packaged-drinking-water-plant-vadodara" />;
}
