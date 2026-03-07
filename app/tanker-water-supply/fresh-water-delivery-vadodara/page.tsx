import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tanker-water-supply")!;

export const metadata: Metadata = {
  title: "Fresh water delivery in Vadodara | Tanker Water Supply | VadodaraExperts",
  description: "Professional fresh water delivery services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tanker-water-supply/fresh-water-delivery-vadodara" },
  openGraph: {
    title: "Fresh water delivery in Vadodara | VadodaraExperts",
    description: "Professional fresh water delivery services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tanker-water-supply/fresh-water-delivery-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fresh-water-delivery-vadodara" />;
}
