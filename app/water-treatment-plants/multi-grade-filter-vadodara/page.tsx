import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-treatment-plants")!;

export const metadata: Metadata = {
  title: "multi grade filter in Vadodara | Water Treatment Plants | VadodaraExperts",
  description: "Professional multi grade filter services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-treatment-plants/multi-grade-filter-vadodara" },
  openGraph: {
    title: "multi grade filter in Vadodara | VadodaraExperts",
    description: "Professional multi grade filter services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-treatment-plants/multi-grade-filter-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="multi-grade-filter-vadodara" />;
}
