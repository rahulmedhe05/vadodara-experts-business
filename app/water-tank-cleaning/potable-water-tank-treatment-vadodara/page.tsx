import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-tank-cleaning")!;

export const metadata: Metadata = {
  title: "Potable water tank treatment in Vadodara | Water Tank Cleaning | VadodaraExperts",
  description: "Professional potable water tank treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-tank-cleaning/potable-water-tank-treatment-vadodara" },
  openGraph: {
    title: "Potable water tank treatment in Vadodara | VadodaraExperts",
    description: "Professional potable water tank treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-tank-cleaning/potable-water-tank-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="potable-water-tank-treatment-vadodara" />;
}
