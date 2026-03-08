import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "plant air conditioning in Vadodara | Industrial HVAC Systems | VadodaraExperts",
  description: "Professional plant air conditioning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems/plant-air-conditioning-vadodara" },
  openGraph: {
    title: "plant air conditioning in Vadodara | VadodaraExperts",
    description: "Professional plant air conditioning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems/plant-air-conditioning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plant-air-conditioning-vadodara" />;
}
