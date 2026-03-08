import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproof-membrane-installation")!;

export const metadata: Metadata = {
  title: "roof leakage solution in Vadodara | Waterproof Membrane Installation | VadodaraExperts",
  description: "Professional roof leakage solution services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproof-membrane-installation/roof-leakage-solution-vadodara" },
  openGraph: {
    title: "roof leakage solution in Vadodara | VadodaraExperts",
    description: "Professional roof leakage solution services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproof-membrane-installation/roof-leakage-solution-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="roof-leakage-solution-vadodara" />;
}
