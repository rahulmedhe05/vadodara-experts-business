import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tanker-water-supply")!;

export const metadata: Metadata = {
  title: "Residential water supply in Vadodara | Tanker Water Supply | VadodaraExperts",
  description: "Professional residential water supply services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tanker-water-supply/residential-water-supply-vadodara" },
  openGraph: {
    title: "Residential water supply in Vadodara | VadodaraExperts",
    description: "Professional residential water supply services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tanker-water-supply/residential-water-supply-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="residential-water-supply-vadodara" />;
}
