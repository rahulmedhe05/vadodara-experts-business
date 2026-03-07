import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sound-lighting-services")!;

export const metadata: Metadata = {
  title: "Restaurant sound system in Vadodara | Sound & Lighting Services | VadodaraExperts",
  description: "Professional restaurant sound system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sound-lighting-services/restaurant-sound-system-vadodara" },
  openGraph: {
    title: "Restaurant sound system in Vadodara | VadodaraExperts",
    description: "Professional restaurant sound system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sound-lighting-services/restaurant-sound-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="restaurant-sound-system-vadodara" />;
}
