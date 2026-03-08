import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-tank-cleaning")!;

export const metadata: Metadata = {
  title: "Anti bacterial water tank treatment in Vadodara | Water Tank Cleaning | VadodaraExperts",
  description: "Professional anti bacterial water tank treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-tank-cleaning/anti-bacterial-water-tank-treatment-vadodara" },
  openGraph: {
    title: "Anti bacterial water tank treatment in Vadodara | VadodaraExperts",
    description: "Professional anti bacterial water tank treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-tank-cleaning/anti-bacterial-water-tank-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="anti-bacterial-water-tank-treatment-vadodara" />;
}
