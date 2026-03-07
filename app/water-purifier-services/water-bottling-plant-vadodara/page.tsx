import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-purifier-services")!;

export const metadata: Metadata = {
  title: "Water bottling plant in Vadodara | Water Purifier Services | VadodaraExperts",
  description: "Professional water bottling plant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-purifier-services/water-bottling-plant-vadodara" },
  openGraph: {
    title: "Water bottling plant in Vadodara | VadodaraExperts",
    description: "Professional water bottling plant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-purifier-services/water-bottling-plant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-bottling-plant-vadodara" />;
}
