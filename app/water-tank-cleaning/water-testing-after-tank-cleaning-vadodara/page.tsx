import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-tank-cleaning")!;

export const metadata: Metadata = {
  title: "Water testing after tank cleaning in Vadodara | Water Tank Cleaning | VadodaraExperts",
  description: "Professional water testing after tank cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-tank-cleaning/water-testing-after-tank-cleaning-vadodara" },
  openGraph: {
    title: "Water testing after tank cleaning in Vadodara | VadodaraExperts",
    description: "Professional water testing after tank cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-tank-cleaning/water-testing-after-tank-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-testing-after-tank-cleaning-vadodara" />;
}
