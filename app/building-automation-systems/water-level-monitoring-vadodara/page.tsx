import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-automation-systems")!;

export const metadata: Metadata = {
  title: "water level monitoring in Vadodara | Building Automation Systems | VadodaraExperts",
  description: "Professional water level monitoring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-automation-systems/water-level-monitoring-vadodara" },
  openGraph: {
    title: "water level monitoring in Vadodara | VadodaraExperts",
    description: "Professional water level monitoring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-automation-systems/water-level-monitoring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-level-monitoring-vadodara" />;
}
