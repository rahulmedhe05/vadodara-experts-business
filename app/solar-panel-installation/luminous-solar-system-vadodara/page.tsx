import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-panel-installation")!;

export const metadata: Metadata = {
  title: "Luminous solar system in Vadodara | Solar Panel Installation | VadodaraExperts",
  description: "Professional luminous solar system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-panel-installation/luminous-solar-system-vadodara" },
  openGraph: {
    title: "Luminous solar system in Vadodara | VadodaraExperts",
    description: "Professional luminous solar system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-panel-installation/luminous-solar-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="luminous-solar-system-vadodara" />;
}
