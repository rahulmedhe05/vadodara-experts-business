import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sound-lighting-services")!;

export const metadata: Metadata = {
  title: "Lapel mic rental in Vadodara | Sound & Lighting Services | VadodaraExperts",
  description: "Professional lapel mic rental services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sound-lighting-services/lapel-mic-rental-vadodara" },
  openGraph: {
    title: "Lapel mic rental in Vadodara | VadodaraExperts",
    description: "Professional lapel mic rental services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sound-lighting-services/lapel-mic-rental-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lapel-mic-rental-vadodara" />;
}
