import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-epc-contractors")!;

export const metadata: Metadata = {
  title: "utility scale solar in Vadodara | Solar EPC Contractors | VadodaraExperts",
  description: "Professional utility scale solar services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-epc-contractors/utility-scale-solar-vadodara" },
  openGraph: {
    title: "utility scale solar in Vadodara | VadodaraExperts",
    description: "Professional utility scale solar services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-epc-contractors/utility-scale-solar-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="utility-scale-solar-vadodara" />;
}
