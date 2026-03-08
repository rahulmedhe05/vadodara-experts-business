import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sound-lighting-services")!;

export const metadata: Metadata = {
  title: "Fireworks display in Vadodara | Sound & Lighting Services | VadodaraExperts",
  description: "Professional fireworks display services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sound-lighting-services/fireworks-display-vadodara" },
  openGraph: {
    title: "Fireworks display in Vadodara | VadodaraExperts",
    description: "Professional fireworks display services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sound-lighting-services/fireworks-display-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fireworks-display-vadodara" />;
}
