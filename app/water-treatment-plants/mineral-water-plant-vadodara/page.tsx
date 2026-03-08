import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-treatment-plants")!;

export const metadata: Metadata = {
  title: "mineral water plant in Vadodara | Water Treatment Plants | VadodaraExperts",
  description: "Professional mineral water plant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-treatment-plants/mineral-water-plant-vadodara" },
  openGraph: {
    title: "mineral water plant in Vadodara | VadodaraExperts",
    description: "Professional mineral water plant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-treatment-plants/mineral-water-plant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mineral-water-plant-vadodara" />;
}
