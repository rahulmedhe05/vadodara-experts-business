import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-automation")!;

export const metadata: Metadata = {
  title: "Automated water pump in Vadodara | Smart Home Automation | VadodaraExperts",
  description: "Professional automated water pump services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-automation/automated-water-pump-vadodara" },
  openGraph: {
    title: "Automated water pump in Vadodara | VadodaraExperts",
    description: "Professional automated water pump services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-automation/automated-water-pump-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="automated-water-pump-vadodara" />;
}
