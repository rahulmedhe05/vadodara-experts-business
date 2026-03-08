import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sound-lighting-services")!;

export const metadata: Metadata = {
  title: "LED curtain light in Vadodara | Sound & Lighting Services | VadodaraExperts",
  description: "Professional led curtain light services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sound-lighting-services/led-curtain-light-vadodara" },
  openGraph: {
    title: "LED curtain light in Vadodara | VadodaraExperts",
    description: "Professional led curtain light services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sound-lighting-services/led-curtain-light-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="led-curtain-light-vadodara" />;
}
