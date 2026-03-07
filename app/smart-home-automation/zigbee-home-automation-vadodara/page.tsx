import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-automation")!;

export const metadata: Metadata = {
  title: "Zigbee home automation in Vadodara | Smart Home Automation | VadodaraExperts",
  description: "Professional zigbee home automation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-automation/zigbee-home-automation-vadodara" },
  openGraph: {
    title: "Zigbee home automation in Vadodara | VadodaraExperts",
    description: "Professional zigbee home automation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-automation/zigbee-home-automation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="zigbee-home-automation-vadodara" />;
}
