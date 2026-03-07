import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "RCC cooling tower in Vadodara | Industrial HVAC Systems | VadodaraExperts",
  description: "Professional rcc cooling tower services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems/rcc-cooling-tower-vadodara" },
  openGraph: {
    title: "RCC cooling tower in Vadodara | VadodaraExperts",
    description: "Professional rcc cooling tower services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems/rcc-cooling-tower-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rcc-cooling-tower-vadodara" />;
}
