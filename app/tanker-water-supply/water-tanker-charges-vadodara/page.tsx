import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tanker-water-supply")!;

export const metadata: Metadata = {
  title: "Water tanker charges in Vadodara | Tanker Water Supply | VadodaraExperts",
  description: "Professional water tanker charges services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tanker-water-supply/water-tanker-charges-vadodara" },
  openGraph: {
    title: "Water tanker charges in Vadodara | VadodaraExperts",
    description: "Professional water tanker charges services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tanker-water-supply/water-tanker-charges-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-tanker-charges-vadodara" />;
}
