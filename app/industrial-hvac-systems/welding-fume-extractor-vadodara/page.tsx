import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "welding fume extractor in Vadodara | Industrial HVAC Systems | VadodaraExperts",
  description: "Professional welding fume extractor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems/welding-fume-extractor-vadodara" },
  openGraph: {
    title: "welding fume extractor in Vadodara | VadodaraExperts",
    description: "Professional welding fume extractor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems/welding-fume-extractor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="welding-fume-extractor-vadodara" />;
}
