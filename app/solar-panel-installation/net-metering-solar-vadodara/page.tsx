import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-panel-installation")!;

export const metadata: Metadata = {
  title: "Net metering solar in Vadodara | Solar Panel Installation | VadodaraExperts",
  description: "Professional net metering solar services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-panel-installation/net-metering-solar-vadodara" },
  openGraph: {
    title: "Net metering solar in Vadodara | VadodaraExperts",
    description: "Professional net metering solar services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-panel-installation/net-metering-solar-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="net-metering-solar-vadodara" />;
}
