import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-automation")!;

export const metadata: Metadata = {
  title: "Voice control home system in Vadodara | Smart Home Automation | VadodaraExperts",
  description: "Professional voice control home system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-automation/voice-control-home-system-vadodara" },
  openGraph: {
    title: "Voice control home system in Vadodara | VadodaraExperts",
    description: "Professional voice control home system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-automation/voice-control-home-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="voice-control-home-system-vadodara" />;
}
