import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sound-lighting-services")!;

export const metadata: Metadata = {
  title: "Corporate event AV in Vadodara | Sound & Lighting Services | VadodaraExperts",
  description: "Professional corporate event av services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sound-lighting-services/corporate-event-av-vadodara" },
  openGraph: {
    title: "Corporate event AV in Vadodara | VadodaraExperts",
    description: "Professional corporate event av services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sound-lighting-services/corporate-event-av-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="corporate-event-av-vadodara" />;
}
