import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-panel-installation")!;

export const metadata: Metadata = {
  title: "Goodwe solar inverter in Vadodara | Solar Panel Installation | VadodaraExperts",
  description: "Professional goodwe solar inverter services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-panel-installation/goodwe-solar-inverter-vadodara" },
  openGraph: {
    title: "Goodwe solar inverter in Vadodara | VadodaraExperts",
    description: "Professional goodwe solar inverter services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-panel-installation/goodwe-solar-inverter-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="goodwe-solar-inverter-vadodara" />;
}
