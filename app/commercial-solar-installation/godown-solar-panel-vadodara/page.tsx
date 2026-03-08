import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-solar-installation")!;

export const metadata: Metadata = {
  title: "godown solar panel in Vadodara | Commercial Solar Installation | VadodaraExperts",
  description: "Professional godown solar panel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-solar-installation/godown-solar-panel-vadodara" },
  openGraph: {
    title: "godown solar panel in Vadodara | VadodaraExperts",
    description: "Professional godown solar panel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-solar-installation/godown-solar-panel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="godown-solar-panel-vadodara" />;
}
