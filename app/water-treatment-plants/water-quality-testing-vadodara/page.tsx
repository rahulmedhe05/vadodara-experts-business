import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-treatment-plants")!;

export const metadata: Metadata = {
  title: "water quality testing in Vadodara | Water Treatment Plants | VadodaraExperts",
  description: "Professional water quality testing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-treatment-plants/water-quality-testing-vadodara" },
  openGraph: {
    title: "water quality testing in Vadodara | VadodaraExperts",
    description: "Professional water quality testing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-treatment-plants/water-quality-testing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-quality-testing-vadodara" />;
}
