import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-treatment-plants")!;

export const metadata: Metadata = {
  title: "water treatment plant cost in Vadodara | Water Treatment Plants | VadodaraExperts",
  description: "Professional water treatment plant cost services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-treatment-plants/water-treatment-plant-cost-vadodara" },
  openGraph: {
    title: "water treatment plant cost in Vadodara | VadodaraExperts",
    description: "Professional water treatment plant cost services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-treatment-plants/water-treatment-plant-cost-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-treatment-plant-cost-vadodara" />;
}
