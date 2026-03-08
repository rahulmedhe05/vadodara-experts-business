import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sound-lighting-services")!;

export const metadata: Metadata = {
  title: "LED wall rental in Vadodara | Sound & Lighting Services | VadodaraExperts",
  description: "Professional led wall rental services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sound-lighting-services/led-wall-rental-vadodara" },
  openGraph: {
    title: "LED wall rental in Vadodara | VadodaraExperts",
    description: "Professional led wall rental services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sound-lighting-services/led-wall-rental-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="led-wall-rental-vadodara" />;
}
