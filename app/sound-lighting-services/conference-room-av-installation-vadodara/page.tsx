import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sound-lighting-services")!;

export const metadata: Metadata = {
  title: "Conference room AV installation in Vadodara | Sound & Lighting Services | VadodaraExperts",
  description: "Professional conference room av installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sound-lighting-services/conference-room-av-installation-vadodara" },
  openGraph: {
    title: "Conference room AV installation in Vadodara | VadodaraExperts",
    description: "Professional conference room av installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sound-lighting-services/conference-room-av-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="conference-room-av-installation-vadodara" />;
}
