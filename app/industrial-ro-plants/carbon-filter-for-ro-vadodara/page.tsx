import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-ro-plants")!;

export const metadata: Metadata = {
  title: "carbon filter for RO in Vadodara | Industrial RO Plants | VadodaraExperts",
  description: "Professional carbon filter for ro services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-ro-plants/carbon-filter-for-ro-vadodara" },
  openGraph: {
    title: "carbon filter for RO in Vadodara | VadodaraExperts",
    description: "Professional carbon filter for ro services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-ro-plants/carbon-filter-for-ro-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="carbon-filter-for-ro-vadodara" />;
}
