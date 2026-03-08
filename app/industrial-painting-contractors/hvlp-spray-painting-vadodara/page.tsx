import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "HVLP spray painting in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional hvlp spray painting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/hvlp-spray-painting-vadodara" },
  openGraph: {
    title: "HVLP spray painting in Vadodara | VadodaraExperts",
    description: "Professional hvlp spray painting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/hvlp-spray-painting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hvlp-spray-painting-vadodara" />;
}
