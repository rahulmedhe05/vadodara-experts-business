import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "NACE certified inspector in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional nace certified inspector services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/nace-certified-inspector-vadodara" },
  openGraph: {
    title: "NACE certified inspector in Vadodara | VadodaraExperts",
    description: "Professional nace certified inspector services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/nace-certified-inspector-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="nace-certified-inspector-vadodara" />;
}
