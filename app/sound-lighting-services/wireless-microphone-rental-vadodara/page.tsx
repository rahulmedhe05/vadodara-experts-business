import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sound-lighting-services")!;

export const metadata: Metadata = {
  title: "Wireless microphone rental in Vadodara | Sound & Lighting Services | VadodaraExperts",
  description: "Professional wireless microphone rental services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sound-lighting-services/wireless-microphone-rental-vadodara" },
  openGraph: {
    title: "Wireless microphone rental in Vadodara | VadodaraExperts",
    description: "Professional wireless microphone rental services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sound-lighting-services/wireless-microphone-rental-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wireless-microphone-rental-vadodara" />;
}
