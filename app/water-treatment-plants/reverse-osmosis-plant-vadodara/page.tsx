import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-treatment-plants")!;

export const metadata: Metadata = {
  title: "reverse osmosis plant in Vadodara | Water Treatment Plants | VadodaraExperts",
  description: "Professional reverse osmosis plant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-treatment-plants/reverse-osmosis-plant-vadodara" },
  openGraph: {
    title: "reverse osmosis plant in Vadodara | VadodaraExperts",
    description: "Professional reverse osmosis plant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-treatment-plants/reverse-osmosis-plant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="reverse-osmosis-plant-vadodara" />;
}
