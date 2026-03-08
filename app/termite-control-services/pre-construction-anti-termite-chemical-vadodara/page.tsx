import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("termite-control-services")!;

export const metadata: Metadata = {
  title: "Pre construction anti termite chemical in Vadodara | Termite Control Services | VadodaraExperts",
  description: "Professional pre construction anti termite chemical services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/termite-control-services/pre-construction-anti-termite-chemical-vadodara" },
  openGraph: {
    title: "Pre construction anti termite chemical in Vadodara | VadodaraExperts",
    description: "Professional pre construction anti termite chemical services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/termite-control-services/pre-construction-anti-termite-chemical-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pre-construction-anti-termite-chemical-vadodara" />;
}
