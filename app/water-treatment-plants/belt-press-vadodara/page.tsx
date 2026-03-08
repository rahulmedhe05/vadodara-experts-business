import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-treatment-plants")!;

export const metadata: Metadata = {
  title: "belt press in Vadodara | Water Treatment Plants | VadodaraExperts",
  description: "Professional belt press services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-treatment-plants/belt-press-vadodara" },
  openGraph: {
    title: "belt press in Vadodara | VadodaraExperts",
    description: "Professional belt press services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-treatment-plants/belt-press-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="belt-press-vadodara" />;
}
