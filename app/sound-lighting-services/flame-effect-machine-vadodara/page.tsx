import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sound-lighting-services")!;

export const metadata: Metadata = {
  title: "Flame effect machine in Vadodara | Sound & Lighting Services | VadodaraExperts",
  description: "Professional flame effect machine services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sound-lighting-services/flame-effect-machine-vadodara" },
  openGraph: {
    title: "Flame effect machine in Vadodara | VadodaraExperts",
    description: "Professional flame effect machine services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sound-lighting-services/flame-effect-machine-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="flame-effect-machine-vadodara" />;
}
