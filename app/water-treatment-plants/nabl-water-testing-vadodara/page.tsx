import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-treatment-plants")!;

export const metadata: Metadata = {
  title: "NABL water testing in Vadodara | Water Treatment Plants | VadodaraExperts",
  description: "Professional nabl water testing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-treatment-plants/nabl-water-testing-vadodara" },
  openGraph: {
    title: "NABL water testing in Vadodara | VadodaraExperts",
    description: "Professional nabl water testing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-treatment-plants/nabl-water-testing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="nabl-water-testing-vadodara" />;
}
