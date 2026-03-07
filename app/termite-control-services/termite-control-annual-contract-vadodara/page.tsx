import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("termite-control-services")!;

export const metadata: Metadata = {
  title: "Termite control annual contract in Vadodara | Termite Control Services | VadodaraExperts",
  description: "Professional termite control annual contract services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/termite-control-services/termite-control-annual-contract-vadodara" },
  openGraph: {
    title: "Termite control annual contract in Vadodara | VadodaraExperts",
    description: "Professional termite control annual contract services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/termite-control-services/termite-control-annual-contract-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="termite-control-annual-contract-vadodara" />;
}
