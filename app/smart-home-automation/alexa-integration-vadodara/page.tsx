import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-automation")!;

export const metadata: Metadata = {
  title: "Alexa integration in Vadodara | Smart Home Automation | VadodaraExperts",
  description: "Professional alexa integration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-automation/alexa-integration-vadodara" },
  openGraph: {
    title: "Alexa integration in Vadodara | VadodaraExperts",
    description: "Professional alexa integration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-automation/alexa-integration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="alexa-integration-vadodara" />;
}
