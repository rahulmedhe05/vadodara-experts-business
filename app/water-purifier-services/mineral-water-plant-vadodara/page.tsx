import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-purifier-services")!;

export const metadata: Metadata = {
  title: "Mineral water plant in Vadodara | Water Purifier Services | VadodaraExperts",
  description: "Professional mineral water plant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-purifier-services/mineral-water-plant-vadodara" },
  openGraph: {
    title: "Mineral water plant in Vadodara | VadodaraExperts",
    description: "Professional mineral water plant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-purifier-services/mineral-water-plant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mineral-water-plant-vadodara" />;
}
