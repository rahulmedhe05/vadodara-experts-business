import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-treatment-plants")!;

export const metadata: Metadata = {
  title: "flash mixer in Vadodara | Water Treatment Plants | VadodaraExperts",
  description: "Professional flash mixer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-treatment-plants/flash-mixer-vadodara" },
  openGraph: {
    title: "flash mixer in Vadodara | VadodaraExperts",
    description: "Professional flash mixer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-treatment-plants/flash-mixer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="flash-mixer-vadodara" />;
}
