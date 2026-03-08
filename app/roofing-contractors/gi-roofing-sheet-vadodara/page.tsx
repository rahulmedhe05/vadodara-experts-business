import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "GI roofing sheet in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional gi roofing sheet services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/gi-roofing-sheet-vadodara" },
  openGraph: {
    title: "GI roofing sheet in Vadodara | VadodaraExperts",
    description: "Professional gi roofing sheet services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/gi-roofing-sheet-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gi-roofing-sheet-vadodara" />;
}
