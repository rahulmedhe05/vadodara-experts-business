import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-ro-plants")!;

export const metadata: Metadata = {
  title: "industrial RO plant cost in Vadodara | Industrial RO Plants | VadodaraExperts",
  description: "Professional industrial ro plant cost services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-ro-plants/industrial-ro-plant-cost-vadodara" },
  openGraph: {
    title: "industrial RO plant cost in Vadodara | VadodaraExperts",
    description: "Professional industrial ro plant cost services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-ro-plants/industrial-ro-plant-cost-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-ro-plant-cost-vadodara" />;
}
