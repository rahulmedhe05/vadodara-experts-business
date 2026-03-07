import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-panel-installation")!;

export const metadata: Metadata = {
  title: "Rooftop solar home in Vadodara | Solar Panel Installation | VadodaraExperts",
  description: "Professional rooftop solar home services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-panel-installation/rooftop-solar-home-vadodara" },
  openGraph: {
    title: "Rooftop solar home in Vadodara | VadodaraExperts",
    description: "Professional rooftop solar home services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-panel-installation/rooftop-solar-home-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rooftop-solar-home-vadodara" />;
}
