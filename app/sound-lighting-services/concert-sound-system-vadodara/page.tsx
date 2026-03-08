import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sound-lighting-services")!;

export const metadata: Metadata = {
  title: "Concert sound system in Vadodara | Sound & Lighting Services | VadodaraExperts",
  description: "Professional concert sound system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sound-lighting-services/concert-sound-system-vadodara" },
  openGraph: {
    title: "Concert sound system in Vadodara | VadodaraExperts",
    description: "Professional concert sound system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sound-lighting-services/concert-sound-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="concert-sound-system-vadodara" />;
}
