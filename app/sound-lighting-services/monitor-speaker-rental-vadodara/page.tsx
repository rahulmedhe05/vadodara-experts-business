import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sound-lighting-services")!;

export const metadata: Metadata = {
  title: "Monitor speaker rental in Vadodara | Sound & Lighting Services | VadodaraExperts",
  description: "Professional monitor speaker rental services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sound-lighting-services/monitor-speaker-rental-vadodara" },
  openGraph: {
    title: "Monitor speaker rental in Vadodara | VadodaraExperts",
    description: "Professional monitor speaker rental services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sound-lighting-services/monitor-speaker-rental-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="monitor-speaker-rental-vadodara" />;
}
