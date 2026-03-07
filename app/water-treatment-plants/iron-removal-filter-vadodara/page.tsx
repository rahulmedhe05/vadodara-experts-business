import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-treatment-plants")!;

export const metadata: Metadata = {
  title: "iron removal filter in Vadodara | Water Treatment Plants | VadodaraExperts",
  description: "Professional iron removal filter services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-treatment-plants/iron-removal-filter-vadodara" },
  openGraph: {
    title: "iron removal filter in Vadodara | VadodaraExperts",
    description: "Professional iron removal filter services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-treatment-plants/iron-removal-filter-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="iron-removal-filter-vadodara" />;
}
