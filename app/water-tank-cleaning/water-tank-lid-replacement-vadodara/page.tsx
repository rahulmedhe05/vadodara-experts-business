import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-tank-cleaning")!;

export const metadata: Metadata = {
  title: "Water tank lid replacement in Vadodara | Water Tank Cleaning | VadodaraExperts",
  description: "Professional water tank lid replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-tank-cleaning/water-tank-lid-replacement-vadodara" },
  openGraph: {
    title: "Water tank lid replacement in Vadodara | VadodaraExperts",
    description: "Professional water tank lid replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-tank-cleaning/water-tank-lid-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-tank-lid-replacement-vadodara" />;
}
