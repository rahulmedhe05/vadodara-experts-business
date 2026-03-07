import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-panel-manufacturing")!;

export const metadata: Metadata = {
  title: "CPRI tested panel in Vadodara | Electrical Panel Manufacturing | VadodaraExperts",
  description: "Professional cpri tested panel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-panel-manufacturing/cpri-tested-panel-vadodara" },
  openGraph: {
    title: "CPRI tested panel in Vadodara | VadodaraExperts",
    description: "Professional cpri tested panel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-panel-manufacturing/cpri-tested-panel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cpri-tested-panel-vadodara" />;
}
