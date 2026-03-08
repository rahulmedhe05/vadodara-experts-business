import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-panel-installation")!;

export const metadata: Metadata = {
  title: "On grid solar system in Vadodara | Solar Panel Installation | VadodaraExperts",
  description: "Professional on grid solar system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-panel-installation/on-grid-solar-system-vadodara" },
  openGraph: {
    title: "On grid solar system in Vadodara | VadodaraExperts",
    description: "Professional on grid solar system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-panel-installation/on-grid-solar-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="on-grid-solar-system-vadodara" />;
}
