import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-automation")!;

export const metadata: Metadata = {
  title: "Smart doorbell camera in Vadodara | Smart Home Automation | VadodaraExperts",
  description: "Professional smart doorbell camera services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-automation/smart-doorbell-camera-vadodara" },
  openGraph: {
    title: "Smart doorbell camera in Vadodara | VadodaraExperts",
    description: "Professional smart doorbell camera services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-automation/smart-doorbell-camera-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smart-doorbell-camera-vadodara" />;
}
