import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-contractors")!;

export const metadata: Metadata = {
  title: "Water supply line in Vadodara | Construction Contractors | VadodaraExperts",
  description: "Professional water supply line services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-contractors/water-supply-line-vadodara" },
  openGraph: {
    title: "Water supply line in Vadodara | VadodaraExperts",
    description: "Professional water supply line services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-contractors/water-supply-line-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-supply-line-vadodara" />;
}
