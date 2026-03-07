import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-treatment-plants")!;

export const metadata: Metadata = {
  title: "tube settler in Vadodara | Water Treatment Plants | VadodaraExperts",
  description: "Professional tube settler services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-treatment-plants/tube-settler-vadodara" },
  openGraph: {
    title: "tube settler in Vadodara | VadodaraExperts",
    description: "Professional tube settler services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-treatment-plants/tube-settler-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tube-settler-vadodara" />;
}
