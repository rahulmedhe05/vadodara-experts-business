import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-treatment-plants")!;

export const metadata: Metadata = {
  title: "DM plant in Vadodara | Water Treatment Plants | VadodaraExperts",
  description: "Professional dm plant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-treatment-plants/dm-plant-vadodara" },
  openGraph: {
    title: "DM plant in Vadodara | VadodaraExperts",
    description: "Professional dm plant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-treatment-plants/dm-plant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dm-plant-vadodara" />;
}
