import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-panel-manufacturing")!;

export const metadata: Metadata = {
  title: "battery charger panel in Vadodara | Electrical Panel Manufacturing | VadodaraExperts",
  description: "Professional battery charger panel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-panel-manufacturing/battery-charger-panel-vadodara" },
  openGraph: {
    title: "battery charger panel in Vadodara | VadodaraExperts",
    description: "Professional battery charger panel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-panel-manufacturing/battery-charger-panel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="battery-charger-panel-vadodara" />;
}
