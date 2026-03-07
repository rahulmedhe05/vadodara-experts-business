import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-tank-cleaning")!;

export const metadata: Metadata = {
  title: "Water tank pipe fitting in Vadodara | Water Tank Cleaning | VadodaraExperts",
  description: "Professional water tank pipe fitting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-tank-cleaning/water-tank-pipe-fitting-vadodara" },
  openGraph: {
    title: "Water tank pipe fitting in Vadodara | VadodaraExperts",
    description: "Professional water tank pipe fitting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-tank-cleaning/water-tank-pipe-fitting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-tank-pipe-fitting-vadodara" />;
}
