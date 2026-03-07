import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sound-lighting-services")!;

export const metadata: Metadata = {
  title: "Hologram display in Vadodara | Sound & Lighting Services | VadodaraExperts",
  description: "Professional hologram display services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sound-lighting-services/hologram-display-vadodara" },
  openGraph: {
    title: "Hologram display in Vadodara | VadodaraExperts",
    description: "Professional hologram display services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sound-lighting-services/hologram-display-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hologram-display-vadodara" />;
}
