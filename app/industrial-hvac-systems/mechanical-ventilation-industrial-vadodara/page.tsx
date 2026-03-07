import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "mechanical ventilation industrial in Vadodara | Industrial HVAC Systems | VadodaraExperts",
  description: "Professional mechanical ventilation industrial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems/mechanical-ventilation-industrial-vadodara" },
  openGraph: {
    title: "mechanical ventilation industrial in Vadodara | VadodaraExperts",
    description: "Professional mechanical ventilation industrial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems/mechanical-ventilation-industrial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mechanical-ventilation-industrial-vadodara" />;
}
