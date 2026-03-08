import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-automation")!;

export const metadata: Metadata = {
  title: "Voice controlled lighting in Vadodara | Smart Home Automation | VadodaraExperts",
  description: "Professional voice controlled lighting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-automation/voice-controlled-lighting-vadodara" },
  openGraph: {
    title: "Voice controlled lighting in Vadodara | VadodaraExperts",
    description: "Professional voice controlled lighting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-automation/voice-controlled-lighting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="voice-controlled-lighting-vadodara" />;
}
