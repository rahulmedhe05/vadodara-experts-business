import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-automation")!;

export const metadata: Metadata = {
  title: "Smart dimmer switch in Vadodara | Smart Home Automation | VadodaraExperts",
  description: "Professional smart dimmer switch services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-automation/smart-dimmer-switch-vadodara" },
  openGraph: {
    title: "Smart dimmer switch in Vadodara | VadodaraExperts",
    description: "Professional smart dimmer switch services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-automation/smart-dimmer-switch-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smart-dimmer-switch-vadodara" />;
}
