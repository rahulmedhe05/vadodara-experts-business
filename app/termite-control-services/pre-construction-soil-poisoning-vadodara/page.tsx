import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("termite-control-services")!;

export const metadata: Metadata = {
  title: "Pre construction soil poisoning in Vadodara | Termite Control Services | VadodaraExperts",
  description: "Professional pre construction soil poisoning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/termite-control-services/pre-construction-soil-poisoning-vadodara" },
  openGraph: {
    title: "Pre construction soil poisoning in Vadodara | VadodaraExperts",
    description: "Professional pre construction soil poisoning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/termite-control-services/pre-construction-soil-poisoning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pre-construction-soil-poisoning-vadodara" />;
}
