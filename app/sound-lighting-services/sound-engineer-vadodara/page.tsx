import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sound-lighting-services")!;

export const metadata: Metadata = {
  title: "Sound engineer in Vadodara | Sound & Lighting Services | VadodaraExperts",
  description: "Professional sound engineer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sound-lighting-services/sound-engineer-vadodara" },
  openGraph: {
    title: "Sound engineer in Vadodara | VadodaraExperts",
    description: "Professional sound engineer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sound-lighting-services/sound-engineer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sound-engineer-vadodara" />;
}
