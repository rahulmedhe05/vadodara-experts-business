import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-systems")!;

export const metadata: Metadata = {
  title: "voice evacuation system in Vadodara | Fire Safety Systems | VadodaraExperts",
  description: "Professional voice evacuation system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-systems/voice-evacuation-system-vadodara" },
  openGraph: {
    title: "voice evacuation system in Vadodara | VadodaraExperts",
    description: "Professional voice evacuation system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-systems/voice-evacuation-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="voice-evacuation-system-vadodara" />;
}
