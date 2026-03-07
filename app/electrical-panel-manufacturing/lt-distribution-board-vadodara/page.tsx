import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-panel-manufacturing")!;

export const metadata: Metadata = {
  title: "LT distribution board in Vadodara | Electrical Panel Manufacturing | VadodaraExperts",
  description: "Professional lt distribution board services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-panel-manufacturing/lt-distribution-board-vadodara" },
  openGraph: {
    title: "LT distribution board in Vadodara | VadodaraExperts",
    description: "Professional lt distribution board services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-panel-manufacturing/lt-distribution-board-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lt-distribution-board-vadodara" />;
}
