import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-panel-installation")!;

export const metadata: Metadata = {
  title: "House solar system in Vadodara | Solar Panel Installation | VadodaraExperts",
  description: "Professional house solar system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-panel-installation/house-solar-system-vadodara" },
  openGraph: {
    title: "House solar system in Vadodara | VadodaraExperts",
    description: "Professional house solar system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-panel-installation/house-solar-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="house-solar-system-vadodara" />;
}
