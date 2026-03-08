import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-construction")!;

export const metadata: Metadata = {
  title: "voice controlled home in Vadodara | Smart Home Construction | VadodaraExperts",
  description: "Professional voice controlled home services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-construction/voice-controlled-home-vadodara" },
  openGraph: {
    title: "voice controlled home in Vadodara | VadodaraExperts",
    description: "Professional voice controlled home services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-construction/voice-controlled-home-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="voice-controlled-home-vadodara" />;
}
