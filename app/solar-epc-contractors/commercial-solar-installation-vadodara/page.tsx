import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-epc-contractors")!;

export const metadata: Metadata = {
  title: "commercial solar installation in Vadodara | Solar EPC Contractors | VadodaraExperts",
  description: "Professional commercial solar installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-epc-contractors/commercial-solar-installation-vadodara" },
  openGraph: {
    title: "commercial solar installation in Vadodara | VadodaraExperts",
    description: "Professional commercial solar installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-epc-contractors/commercial-solar-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="commercial-solar-installation-vadodara" />;
}
