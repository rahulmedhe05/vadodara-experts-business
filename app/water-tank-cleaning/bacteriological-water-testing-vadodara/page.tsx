import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-tank-cleaning")!;

export const metadata: Metadata = {
  title: "Bacteriological water testing in Vadodara | Water Tank Cleaning | VadodaraExperts",
  description: "Professional bacteriological water testing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-tank-cleaning/bacteriological-water-testing-vadodara" },
  openGraph: {
    title: "Bacteriological water testing in Vadodara | VadodaraExperts",
    description: "Professional bacteriological water testing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-tank-cleaning/bacteriological-water-testing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bacteriological-water-testing-vadodara" />;
}
