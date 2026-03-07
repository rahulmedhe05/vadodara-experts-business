import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-purifier-services")!;

export const metadata: Metadata = {
  title: "Industrial RO plant in Vadodara | Water Purifier Services | VadodaraExperts",
  description: "Professional industrial ro plant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-purifier-services/industrial-ro-plant-vadodara" },
  openGraph: {
    title: "Industrial RO plant in Vadodara | VadodaraExperts",
    description: "Professional industrial ro plant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-purifier-services/industrial-ro-plant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-ro-plant-vadodara" />;
}
