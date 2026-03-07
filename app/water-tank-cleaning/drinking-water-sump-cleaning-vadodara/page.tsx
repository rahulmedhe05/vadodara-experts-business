import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-tank-cleaning")!;

export const metadata: Metadata = {
  title: "Drinking water sump cleaning in Vadodara | Water Tank Cleaning | VadodaraExperts",
  description: "Professional drinking water sump cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-tank-cleaning/drinking-water-sump-cleaning-vadodara" },
  openGraph: {
    title: "Drinking water sump cleaning in Vadodara | VadodaraExperts",
    description: "Professional drinking water sump cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-tank-cleaning/drinking-water-sump-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="drinking-water-sump-cleaning-vadodara" />;
}
