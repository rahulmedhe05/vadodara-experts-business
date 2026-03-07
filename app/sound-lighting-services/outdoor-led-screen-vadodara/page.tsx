import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sound-lighting-services")!;

export const metadata: Metadata = {
  title: "Outdoor LED screen in Vadodara | Sound & Lighting Services | VadodaraExperts",
  description: "Professional outdoor led screen services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sound-lighting-services/outdoor-led-screen-vadodara" },
  openGraph: {
    title: "Outdoor LED screen in Vadodara | VadodaraExperts",
    description: "Professional outdoor led screen services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sound-lighting-services/outdoor-led-screen-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="outdoor-led-screen-vadodara" />;
}
