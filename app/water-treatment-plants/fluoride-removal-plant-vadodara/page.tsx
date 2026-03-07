import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-treatment-plants")!;

export const metadata: Metadata = {
  title: "fluoride removal plant in Vadodara | Water Treatment Plants | VadodaraExperts",
  description: "Professional fluoride removal plant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-treatment-plants/fluoride-removal-plant-vadodara" },
  openGraph: {
    title: "fluoride removal plant in Vadodara | VadodaraExperts",
    description: "Professional fluoride removal plant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-treatment-plants/fluoride-removal-plant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fluoride-removal-plant-vadodara" />;
}
