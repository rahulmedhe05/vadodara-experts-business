import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-tank-cleaning")!;

export const metadata: Metadata = {
  title: "Water tank cleaning services in Vadodara | Water Tank Cleaning | VadodaraExperts",
  description: "Professional water tank cleaning services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-tank-cleaning/water-tank-cleaning-services-vadodara" },
  openGraph: {
    title: "Water tank cleaning services in Vadodara | VadodaraExperts",
    description: "Professional water tank cleaning services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-tank-cleaning/water-tank-cleaning-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-tank-cleaning-services-vadodara" />;
}
