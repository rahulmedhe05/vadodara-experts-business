import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-ro-plants")!;

export const metadata: Metadata = {
  title: "5000 LPH RO plant in Vadodara | Industrial RO Plants | VadodaraExperts",
  description: "Professional 5000 lph ro plant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-ro-plants/5000-lph-ro-plant-vadodara" },
  openGraph: {
    title: "5000 LPH RO plant in Vadodara | VadodaraExperts",
    description: "Professional 5000 lph ro plant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-ro-plants/5000-lph-ro-plant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="5000-lph-ro-plant-vadodara" />;
}
