import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "paint booth ventilation in Vadodara | Industrial HVAC Systems | VadodaraExperts",
  description: "Professional paint booth ventilation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems/paint-booth-ventilation-vadodara" },
  openGraph: {
    title: "paint booth ventilation in Vadodara | VadodaraExperts",
    description: "Professional paint booth ventilation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems/paint-booth-ventilation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="paint-booth-ventilation-vadodara" />;
}
