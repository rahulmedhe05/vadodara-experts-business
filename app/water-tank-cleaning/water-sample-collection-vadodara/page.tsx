import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-tank-cleaning")!;

export const metadata: Metadata = {
  title: "Water sample collection in Vadodara | Water Tank Cleaning | VadodaraExperts",
  description: "Professional water sample collection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-tank-cleaning/water-sample-collection-vadodara" },
  openGraph: {
    title: "Water sample collection in Vadodara | VadodaraExperts",
    description: "Professional water sample collection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-tank-cleaning/water-sample-collection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-sample-collection-vadodara" />;
}
