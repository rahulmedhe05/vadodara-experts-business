import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-treatment-plants")!;

export const metadata: Metadata = {
  title: "arsenic removal plant in Vadodara | Water Treatment Plants | VadodaraExperts",
  description: "Professional arsenic removal plant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-treatment-plants/arsenic-removal-plant-vadodara" },
  openGraph: {
    title: "arsenic removal plant in Vadodara | VadodaraExperts",
    description: "Professional arsenic removal plant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-treatment-plants/arsenic-removal-plant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="arsenic-removal-plant-vadodara" />;
}
