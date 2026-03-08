import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "NACE surface preparation in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional nace surface preparation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/nace-surface-preparation-vadodara" },
  openGraph: {
    title: "NACE surface preparation in Vadodara | VadodaraExperts",
    description: "Professional nace surface preparation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/nace-surface-preparation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="nace-surface-preparation-vadodara" />;
}
