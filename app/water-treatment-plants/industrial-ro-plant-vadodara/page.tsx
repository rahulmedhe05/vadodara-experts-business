import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-treatment-plants")!;

export const metadata: Metadata = {
  title: "industrial RO plant in Vadodara | Water Treatment Plants | VadodaraExperts",
  description: "Professional industrial ro plant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-treatment-plants/industrial-ro-plant-vadodara" },
  openGraph: {
    title: "industrial RO plant in Vadodara | VadodaraExperts",
    description: "Professional industrial ro plant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-treatment-plants/industrial-ro-plant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-ro-plant-vadodara" />;
}
