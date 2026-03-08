import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-tank-cleaning")!;

export const metadata: Metadata = {
  title: "Chemical tank cleaning in Vadodara | Water Tank Cleaning | VadodaraExperts",
  description: "Professional chemical tank cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-tank-cleaning/chemical-tank-cleaning-vadodara" },
  openGraph: {
    title: "Chemical tank cleaning in Vadodara | VadodaraExperts",
    description: "Professional chemical tank cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-tank-cleaning/chemical-tank-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chemical-tank-cleaning-vadodara" />;
}
