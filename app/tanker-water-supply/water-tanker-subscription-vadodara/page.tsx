import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tanker-water-supply")!;

export const metadata: Metadata = {
  title: "Water tanker subscription in Vadodara | Tanker Water Supply | VadodaraExperts",
  description: "Professional water tanker subscription services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tanker-water-supply/water-tanker-subscription-vadodara" },
  openGraph: {
    title: "Water tanker subscription in Vadodara | VadodaraExperts",
    description: "Professional water tanker subscription services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tanker-water-supply/water-tanker-subscription-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-tanker-subscription-vadodara" />;
}
