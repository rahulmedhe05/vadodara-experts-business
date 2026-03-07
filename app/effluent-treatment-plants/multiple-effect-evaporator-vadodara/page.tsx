import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("effluent-treatment-plants")!;

export const metadata: Metadata = {
  title: "multiple effect evaporator in Vadodara | Effluent Treatment Plants | VadodaraExperts",
  description: "Professional multiple effect evaporator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/effluent-treatment-plants/multiple-effect-evaporator-vadodara" },
  openGraph: {
    title: "multiple effect evaporator in Vadodara | VadodaraExperts",
    description: "Professional multiple effect evaporator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/effluent-treatment-plants/multiple-effect-evaporator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="multiple-effect-evaporator-vadodara" />;
}
