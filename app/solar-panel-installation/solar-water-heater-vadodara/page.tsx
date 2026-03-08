import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-panel-installation")!;

export const metadata: Metadata = {
  title: "Solar water heater in Vadodara | Solar Panel Installation | VadodaraExperts",
  description: "Professional solar water heater services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-panel-installation/solar-water-heater-vadodara" },
  openGraph: {
    title: "Solar water heater in Vadodara | VadodaraExperts",
    description: "Professional solar water heater services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-panel-installation/solar-water-heater-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="solar-water-heater-vadodara" />;
}
