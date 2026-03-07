import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-automation")!;

export const metadata: Metadata = {
  title: "Smart water purifier in Vadodara | Smart Home Automation | VadodaraExperts",
  description: "Professional smart water purifier services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-automation/smart-water-purifier-vadodara" },
  openGraph: {
    title: "Smart water purifier in Vadodara | VadodaraExperts",
    description: "Professional smart water purifier services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-automation/smart-water-purifier-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smart-water-purifier-vadodara" />;
}
