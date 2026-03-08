import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "painting for chemical plant in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional painting for chemical plant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/painting-for-chemical-plant-vadodara" },
  openGraph: {
    title: "painting for chemical plant in Vadodara | VadodaraExperts",
    description: "Professional painting for chemical plant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/painting-for-chemical-plant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="painting-for-chemical-plant-vadodara" />;
}
