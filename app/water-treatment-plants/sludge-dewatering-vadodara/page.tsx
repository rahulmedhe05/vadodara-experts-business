import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-treatment-plants")!;

export const metadata: Metadata = {
  title: "sludge dewatering in Vadodara | Water Treatment Plants | VadodaraExperts",
  description: "Professional sludge dewatering services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-treatment-plants/sludge-dewatering-vadodara" },
  openGraph: {
    title: "sludge dewatering in Vadodara | VadodaraExperts",
    description: "Professional sludge dewatering services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-treatment-plants/sludge-dewatering-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sludge-dewatering-vadodara" />;
}
