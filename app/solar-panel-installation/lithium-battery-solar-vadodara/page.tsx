import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-panel-installation")!;

export const metadata: Metadata = {
  title: "Lithium battery solar in Vadodara | Solar Panel Installation | VadodaraExperts",
  description: "Professional lithium battery solar services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-panel-installation/lithium-battery-solar-vadodara" },
  openGraph: {
    title: "Lithium battery solar in Vadodara | VadodaraExperts",
    description: "Professional lithium battery solar services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-panel-installation/lithium-battery-solar-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lithium-battery-solar-vadodara" />;
}
