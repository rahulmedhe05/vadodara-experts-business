import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-automation")!;

export const metadata: Metadata = {
  title: "Smart device configuration in Vadodara | Smart Home Automation | VadodaraExperts",
  description: "Professional smart device configuration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-automation/smart-device-configuration-vadodara" },
  openGraph: {
    title: "Smart device configuration in Vadodara | VadodaraExperts",
    description: "Professional smart device configuration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-automation/smart-device-configuration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smart-device-configuration-vadodara" />;
}
