import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-ro-plants")!;

export const metadata: Metadata = {
  title: "RO plant spare parts in Vadodara | Industrial RO Plants | VadodaraExperts",
  description: "Professional ro plant spare parts services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-ro-plants/ro-plant-spare-parts-vadodara" },
  openGraph: {
    title: "RO plant spare parts in Vadodara | VadodaraExperts",
    description: "Professional ro plant spare parts services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-ro-plants/ro-plant-spare-parts-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ro-plant-spare-parts-vadodara" />;
}
