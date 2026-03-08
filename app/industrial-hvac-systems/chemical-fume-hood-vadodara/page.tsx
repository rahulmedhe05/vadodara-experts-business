import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "chemical fume hood in Vadodara | Industrial HVAC Systems | VadodaraExperts",
  description: "Professional chemical fume hood services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems/chemical-fume-hood-vadodara" },
  openGraph: {
    title: "chemical fume hood in Vadodara | VadodaraExperts",
    description: "Professional chemical fume hood services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems/chemical-fume-hood-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chemical-fume-hood-vadodara" />;
}
