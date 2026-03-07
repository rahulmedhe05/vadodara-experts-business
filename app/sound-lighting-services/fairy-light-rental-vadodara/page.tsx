import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sound-lighting-services")!;

export const metadata: Metadata = {
  title: "Fairy light rental in Vadodara | Sound & Lighting Services | VadodaraExperts",
  description: "Professional fairy light rental services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sound-lighting-services/fairy-light-rental-vadodara" },
  openGraph: {
    title: "Fairy light rental in Vadodara | VadodaraExperts",
    description: "Professional fairy light rental services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sound-lighting-services/fairy-light-rental-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fairy-light-rental-vadodara" />;
}
