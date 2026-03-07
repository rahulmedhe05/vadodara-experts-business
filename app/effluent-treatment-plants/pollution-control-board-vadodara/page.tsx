import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("effluent-treatment-plants")!;

export const metadata: Metadata = {
  title: "pollution control board in Vadodara | Effluent Treatment Plants | VadodaraExperts",
  description: "Professional pollution control board services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/effluent-treatment-plants/pollution-control-board-vadodara" },
  openGraph: {
    title: "pollution control board in Vadodara | VadodaraExperts",
    description: "Professional pollution control board services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/effluent-treatment-plants/pollution-control-board-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pollution-control-board-vadodara" />;
}
