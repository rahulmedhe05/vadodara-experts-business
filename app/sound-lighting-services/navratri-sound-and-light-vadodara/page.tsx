import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sound-lighting-services")!;

export const metadata: Metadata = {
  title: "Navratri sound and light in Vadodara | Sound & Lighting Services | VadodaraExperts",
  description: "Professional navratri sound and light services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sound-lighting-services/navratri-sound-and-light-vadodara" },
  openGraph: {
    title: "Navratri sound and light in Vadodara | VadodaraExperts",
    description: "Professional navratri sound and light services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sound-lighting-services/navratri-sound-and-light-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="navratri-sound-and-light-vadodara" />;
}
