import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-panel-manufacturing")!;

export const metadata: Metadata = {
  title: "explosion proof panel in Vadodara | Electrical Panel Manufacturing | VadodaraExperts",
  description: "Professional explosion proof panel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-panel-manufacturing/explosion-proof-panel-vadodara" },
  openGraph: {
    title: "explosion proof panel in Vadodara | VadodaraExperts",
    description: "Professional explosion proof panel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-panel-manufacturing/explosion-proof-panel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="explosion-proof-panel-vadodara" />;
}
