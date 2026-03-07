import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-panel-manufacturing")!;

export const metadata: Metadata = {
  title: "fire alarm panel in Vadodara | Electrical Panel Manufacturing | VadodaraExperts",
  description: "Professional fire alarm panel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-panel-manufacturing/fire-alarm-panel-vadodara" },
  openGraph: {
    title: "fire alarm panel in Vadodara | VadodaraExperts",
    description: "Professional fire alarm panel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-panel-manufacturing/fire-alarm-panel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-alarm-panel-vadodara" />;
}
