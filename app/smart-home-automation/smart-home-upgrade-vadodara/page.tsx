import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-automation")!;

export const metadata: Metadata = {
  title: "Smart home upgrade in Vadodara | Smart Home Automation | VadodaraExperts",
  description: "Professional smart home upgrade services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-automation/smart-home-upgrade-vadodara" },
  openGraph: {
    title: "Smart home upgrade in Vadodara | VadodaraExperts",
    description: "Professional smart home upgrade services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-automation/smart-home-upgrade-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smart-home-upgrade-vadodara" />;
}
