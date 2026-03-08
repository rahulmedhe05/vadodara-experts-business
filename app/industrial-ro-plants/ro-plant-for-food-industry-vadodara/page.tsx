import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-ro-plants")!;

export const metadata: Metadata = {
  title: "RO plant for food industry in Vadodara | Industrial RO Plants | VadodaraExperts",
  description: "Professional ro plant for food industry services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-ro-plants/ro-plant-for-food-industry-vadodara" },
  openGraph: {
    title: "RO plant for food industry in Vadodara | VadodaraExperts",
    description: "Professional ro plant for food industry services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-ro-plants/ro-plant-for-food-industry-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ro-plant-for-food-industry-vadodara" />;
}
