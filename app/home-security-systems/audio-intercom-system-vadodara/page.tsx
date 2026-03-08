import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Audio intercom system in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional audio intercom system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/audio-intercom-system-vadodara" },
  openGraph: {
    title: "Audio intercom system in Vadodara | VadodaraExperts",
    description: "Professional audio intercom system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/audio-intercom-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="audio-intercom-system-vadodara" />;
}
