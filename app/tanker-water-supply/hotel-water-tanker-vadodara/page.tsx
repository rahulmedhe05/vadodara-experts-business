import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tanker-water-supply")!;

export const metadata: Metadata = {
  title: "Hotel water tanker in Vadodara | Tanker Water Supply | VadodaraExperts",
  description: "Professional hotel water tanker services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tanker-water-supply/hotel-water-tanker-vadodara" },
  openGraph: {
    title: "Hotel water tanker in Vadodara | VadodaraExperts",
    description: "Professional hotel water tanker services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tanker-water-supply/hotel-water-tanker-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hotel-water-tanker-vadodara" />;
}
