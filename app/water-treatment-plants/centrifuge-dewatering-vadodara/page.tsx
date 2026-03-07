import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-treatment-plants")!;

export const metadata: Metadata = {
  title: "centrifuge dewatering in Vadodara | Water Treatment Plants | VadodaraExperts",
  description: "Professional centrifuge dewatering services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-treatment-plants/centrifuge-dewatering-vadodara" },
  openGraph: {
    title: "centrifuge dewatering in Vadodara | VadodaraExperts",
    description: "Professional centrifuge dewatering services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-treatment-plants/centrifuge-dewatering-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="centrifuge-dewatering-vadodara" />;
}
