import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-treatment-plants")!;

export const metadata: Metadata = {
  title: "RO plant maintenance in Vadodara | Water Treatment Plants | VadodaraExperts",
  description: "Professional ro plant maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-treatment-plants/ro-plant-maintenance-vadodara" },
  openGraph: {
    title: "RO plant maintenance in Vadodara | VadodaraExperts",
    description: "Professional ro plant maintenance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-treatment-plants/ro-plant-maintenance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ro-plant-maintenance-vadodara" />;
}
