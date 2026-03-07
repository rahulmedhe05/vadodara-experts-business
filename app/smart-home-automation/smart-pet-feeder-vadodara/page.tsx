import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-automation")!;

export const metadata: Metadata = {
  title: "Smart pet feeder in Vadodara | Smart Home Automation | VadodaraExperts",
  description: "Professional smart pet feeder services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-automation/smart-pet-feeder-vadodara" },
  openGraph: {
    title: "Smart pet feeder in Vadodara | VadodaraExperts",
    description: "Professional smart pet feeder services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-automation/smart-pet-feeder-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smart-pet-feeder-vadodara" />;
}
