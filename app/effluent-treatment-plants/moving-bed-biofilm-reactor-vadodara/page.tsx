import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("effluent-treatment-plants")!;

export const metadata: Metadata = {
  title: "moving bed biofilm reactor in Vadodara | Effluent Treatment Plants | VadodaraExperts",
  description: "Professional moving bed biofilm reactor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/effluent-treatment-plants/moving-bed-biofilm-reactor-vadodara" },
  openGraph: {
    title: "moving bed biofilm reactor in Vadodara | VadodaraExperts",
    description: "Professional moving bed biofilm reactor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/effluent-treatment-plants/moving-bed-biofilm-reactor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="moving-bed-biofilm-reactor-vadodara" />;
}
