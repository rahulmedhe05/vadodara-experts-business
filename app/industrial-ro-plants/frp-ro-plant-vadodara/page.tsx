import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-ro-plants")!;

export const metadata: Metadata = {
  title: "FRP RO plant in Vadodara | Industrial RO Plants | VadodaraExperts",
  description: "Professional frp ro plant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-ro-plants/frp-ro-plant-vadodara" },
  openGraph: {
    title: "FRP RO plant in Vadodara | VadodaraExperts",
    description: "Professional frp ro plant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-ro-plants/frp-ro-plant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="frp-ro-plant-vadodara" />;
}
