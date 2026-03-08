import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-treatment-plants")!;

export const metadata: Metadata = {
  title: "RO plant manufacturer in Vadodara | Water Treatment Plants | VadodaraExperts",
  description: "Professional ro plant manufacturer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-treatment-plants/ro-plant-manufacturer-vadodara" },
  openGraph: {
    title: "RO plant manufacturer in Vadodara | VadodaraExperts",
    description: "Professional ro plant manufacturer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-treatment-plants/ro-plant-manufacturer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ro-plant-manufacturer-vadodara" />;
}
