import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-ro-plants")!;

export const metadata: Metadata = {
  title: "best industrial RO plant in Vadodara | Industrial RO Plants | VadodaraExperts",
  description: "Professional best industrial ro plant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-ro-plants/best-industrial-ro-plant-vadodara" },
  openGraph: {
    title: "best industrial RO plant in Vadodara | VadodaraExperts",
    description: "Professional best industrial ro plant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-ro-plants/best-industrial-ro-plant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-industrial-ro-plant-vadodara" />;
}
