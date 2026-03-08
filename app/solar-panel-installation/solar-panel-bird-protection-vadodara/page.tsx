import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-panel-installation")!;

export const metadata: Metadata = {
  title: "Solar panel bird protection in Vadodara | Solar Panel Installation | VadodaraExperts",
  description: "Professional solar panel bird protection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-panel-installation/solar-panel-bird-protection-vadodara" },
  openGraph: {
    title: "Solar panel bird protection in Vadodara | VadodaraExperts",
    description: "Professional solar panel bird protection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-panel-installation/solar-panel-bird-protection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="solar-panel-bird-protection-vadodara" />;
}
