import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-panel-installation")!;

export const metadata: Metadata = {
  title: "Bifacial solar panel in Vadodara | Solar Panel Installation | VadodaraExperts",
  description: "Professional bifacial solar panel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-panel-installation/bifacial-solar-panel-vadodara" },
  openGraph: {
    title: "Bifacial solar panel in Vadodara | VadodaraExperts",
    description: "Professional bifacial solar panel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-panel-installation/bifacial-solar-panel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bifacial-solar-panel-vadodara" />;
}
