import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-treatment-plants")!;

export const metadata: Metadata = {
  title: "activated carbon filter in Vadodara | Water Treatment Plants | VadodaraExperts",
  description: "Professional activated carbon filter services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-treatment-plants/activated-carbon-filter-vadodara" },
  openGraph: {
    title: "activated carbon filter in Vadodara | VadodaraExperts",
    description: "Professional activated carbon filter services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-treatment-plants/activated-carbon-filter-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="activated-carbon-filter-vadodara" />;
}
