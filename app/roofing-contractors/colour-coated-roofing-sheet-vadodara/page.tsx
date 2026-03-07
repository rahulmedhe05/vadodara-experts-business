import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "colour coated roofing sheet in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional colour coated roofing sheet services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/colour-coated-roofing-sheet-vadodara" },
  openGraph: {
    title: "colour coated roofing sheet in Vadodara | VadodaraExperts",
    description: "Professional colour coated roofing sheet services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/colour-coated-roofing-sheet-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="colour-coated-roofing-sheet-vadodara" />;
}
