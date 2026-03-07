import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-tank-cleaning")!;

export const metadata: Metadata = {
  title: "TDS testing water tank in Vadodara | Water Tank Cleaning | VadodaraExperts",
  description: "Professional tds testing water tank services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-tank-cleaning/tds-testing-water-tank-vadodara" },
  openGraph: {
    title: "TDS testing water tank in Vadodara | VadodaraExperts",
    description: "Professional tds testing water tank services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-tank-cleaning/tds-testing-water-tank-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tds-testing-water-tank-vadodara" />;
}
