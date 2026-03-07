import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("videography-services")!;

export const metadata: Metadata = {
  title: "Voice over recording in Vadodara | Videography Services | VadodaraExperts",
  description: "Professional voice over recording services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/videography-services/voice-over-recording-vadodara" },
  openGraph: {
    title: "Voice over recording in Vadodara | VadodaraExperts",
    description: "Professional voice over recording services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/videography-services/voice-over-recording-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="voice-over-recording-vadodara" />;
}
