import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sound-lighting-services")!;

export const metadata: Metadata = {
  title: "Wedding sound system in Vadodara | Sound & Lighting Services | VadodaraExperts",
  description: "Professional wedding sound system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sound-lighting-services/wedding-sound-system-vadodara" },
  openGraph: {
    title: "Wedding sound system in Vadodara | VadodaraExperts",
    description: "Professional wedding sound system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sound-lighting-services/wedding-sound-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wedding-sound-system-vadodara" />;
}
