import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "scroll chiller industrial in Vadodara | Industrial HVAC Systems | VadodaraExperts",
  description: "Professional scroll chiller industrial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems/scroll-chiller-industrial-vadodara" },
  openGraph: {
    title: "scroll chiller industrial in Vadodara | VadodaraExperts",
    description: "Professional scroll chiller industrial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems/scroll-chiller-industrial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="scroll-chiller-industrial-vadodara" />;
}
