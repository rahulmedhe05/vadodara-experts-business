import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tanker-water-supply")!;

export const metadata: Metadata = {
  title: "Foundation work water supply in Vadodara | Tanker Water Supply | VadodaraExperts",
  description: "Professional foundation work water supply services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tanker-water-supply/foundation-work-water-supply-vadodara" },
  openGraph: {
    title: "Foundation work water supply in Vadodara | VadodaraExperts",
    description: "Professional foundation work water supply services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tanker-water-supply/foundation-work-water-supply-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="foundation-work-water-supply-vadodara" />;
}
