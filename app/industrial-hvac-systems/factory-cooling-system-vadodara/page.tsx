import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "factory cooling system in Vadodara | Industrial HVAC Systems | VadodaraExperts",
  description: "Professional factory cooling system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems/factory-cooling-system-vadodara" },
  openGraph: {
    title: "factory cooling system in Vadodara | VadodaraExperts",
    description: "Professional factory cooling system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems/factory-cooling-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-cooling-system-vadodara" />;
}
