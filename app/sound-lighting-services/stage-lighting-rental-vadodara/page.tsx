import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sound-lighting-services")!;

export const metadata: Metadata = {
  title: "Stage lighting rental in Vadodara | Sound & Lighting Services | VadodaraExperts",
  description: "Professional stage lighting rental services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sound-lighting-services/stage-lighting-rental-vadodara" },
  openGraph: {
    title: "Stage lighting rental in Vadodara | VadodaraExperts",
    description: "Professional stage lighting rental services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sound-lighting-services/stage-lighting-rental-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="stage-lighting-rental-vadodara" />;
}
