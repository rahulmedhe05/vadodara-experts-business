import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "energy efficient industrial HVAC in Vadodara | Industrial HVAC Systems | VadodaraExperts",
  description: "Professional energy efficient industrial hvac services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems/energy-efficient-industrial-hvac-vadodara" },
  openGraph: {
    title: "energy efficient industrial HVAC in Vadodara | VadodaraExperts",
    description: "Professional energy efficient industrial hvac services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems/energy-efficient-industrial-hvac-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="energy-efficient-industrial-hvac-vadodara" />;
}
