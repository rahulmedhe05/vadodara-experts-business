import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "pharmaceutical HVAC system in Vadodara | Industrial HVAC Systems | VadodaraExperts",
  description: "Professional pharmaceutical hvac system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems/pharmaceutical-hvac-system-vadodara" },
  openGraph: {
    title: "pharmaceutical HVAC system in Vadodara | VadodaraExperts",
    description: "Professional pharmaceutical hvac system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems/pharmaceutical-hvac-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pharmaceutical-hvac-system-vadodara" />;
}
