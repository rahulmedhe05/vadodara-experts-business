import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sound-lighting-services")!;

export const metadata: Metadata = {
  title: "Conference AV setup in Vadodara | Sound & Lighting Services | VadodaraExperts",
  description: "Professional conference av setup services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sound-lighting-services/conference-av-setup-vadodara" },
  openGraph: {
    title: "Conference AV setup in Vadodara | VadodaraExperts",
    description: "Professional conference av setup services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sound-lighting-services/conference-av-setup-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="conference-av-setup-vadodara" />;
}
