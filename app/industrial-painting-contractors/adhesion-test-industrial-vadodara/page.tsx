import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "adhesion test industrial in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional adhesion test industrial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/adhesion-test-industrial-vadodara" },
  openGraph: {
    title: "adhesion test industrial in Vadodara | VadodaraExperts",
    description: "Professional adhesion test industrial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/adhesion-test-industrial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="adhesion-test-industrial-vadodara" />;
}
