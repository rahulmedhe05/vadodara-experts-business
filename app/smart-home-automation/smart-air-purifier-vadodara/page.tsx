import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-automation")!;

export const metadata: Metadata = {
  title: "Smart air purifier in Vadodara | Smart Home Automation | VadodaraExperts",
  description: "Professional smart air purifier services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-automation/smart-air-purifier-vadodara" },
  openGraph: {
    title: "Smart air purifier in Vadodara | VadodaraExperts",
    description: "Professional smart air purifier services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-automation/smart-air-purifier-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smart-air-purifier-vadodara" />;
}
