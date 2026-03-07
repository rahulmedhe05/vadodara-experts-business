import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sound-lighting-services")!;

export const metadata: Metadata = {
  title: "Equalizer rental in Vadodara | Sound & Lighting Services | VadodaraExperts",
  description: "Professional equalizer rental services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sound-lighting-services/equalizer-rental-vadodara" },
  openGraph: {
    title: "Equalizer rental in Vadodara | VadodaraExperts",
    description: "Professional equalizer rental services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sound-lighting-services/equalizer-rental-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="equalizer-rental-vadodara" />;
}
