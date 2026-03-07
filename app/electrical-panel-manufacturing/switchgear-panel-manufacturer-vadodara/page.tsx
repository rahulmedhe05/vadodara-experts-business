import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-panel-manufacturing")!;

export const metadata: Metadata = {
  title: "switchgear panel manufacturer in Vadodara | Electrical Panel Manufacturing | VadodaraExperts",
  description: "Professional switchgear panel manufacturer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-panel-manufacturing/switchgear-panel-manufacturer-vadodara" },
  openGraph: {
    title: "switchgear panel manufacturer in Vadodara | VadodaraExperts",
    description: "Professional switchgear panel manufacturer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-panel-manufacturing/switchgear-panel-manufacturer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="switchgear-panel-manufacturer-vadodara" />;
}
