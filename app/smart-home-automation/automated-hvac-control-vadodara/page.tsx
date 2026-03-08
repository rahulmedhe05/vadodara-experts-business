import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-automation")!;

export const metadata: Metadata = {
  title: "Automated HVAC control in Vadodara | Smart Home Automation | VadodaraExperts",
  description: "Professional automated hvac control services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-automation/automated-hvac-control-vadodara" },
  openGraph: {
    title: "Automated HVAC control in Vadodara | VadodaraExperts",
    description: "Professional automated hvac control services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-automation/automated-hvac-control-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="automated-hvac-control-vadodara" />;
}
