import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-panel-installation")!;

export const metadata: Metadata = {
  title: "Solar garden light in Vadodara | Solar Panel Installation | VadodaraExperts",
  description: "Professional solar garden light services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-panel-installation/solar-garden-light-vadodara" },
  openGraph: {
    title: "Solar garden light in Vadodara | VadodaraExperts",
    description: "Professional solar garden light services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-panel-installation/solar-garden-light-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="solar-garden-light-vadodara" />;
}
