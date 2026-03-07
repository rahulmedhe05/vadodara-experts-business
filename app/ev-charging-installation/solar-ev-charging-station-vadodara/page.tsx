import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ev-charging-installation")!;

export const metadata: Metadata = {
  title: "Solar EV charging station in Vadodara | EV Charging Installation | VadodaraExperts",
  description: "Professional solar ev charging station services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ev-charging-installation/solar-ev-charging-station-vadodara" },
  openGraph: {
    title: "Solar EV charging station in Vadodara | VadodaraExperts",
    description: "Professional solar ev charging station services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ev-charging-installation/solar-ev-charging-station-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="solar-ev-charging-station-vadodara" />;
}
