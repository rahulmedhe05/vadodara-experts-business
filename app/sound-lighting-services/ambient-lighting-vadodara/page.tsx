import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sound-lighting-services")!;

export const metadata: Metadata = {
  title: "Ambient lighting in Vadodara | Sound & Lighting Services | VadodaraExperts",
  description: "Professional ambient lighting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sound-lighting-services/ambient-lighting-vadodara" },
  openGraph: {
    title: "Ambient lighting in Vadodara | VadodaraExperts",
    description: "Professional ambient lighting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sound-lighting-services/ambient-lighting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ambient-lighting-vadodara" />;
}
