import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "equipment painting in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional equipment painting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/equipment-painting-vadodara" },
  openGraph: {
    title: "equipment painting in Vadodara | VadodaraExperts",
    description: "Professional equipment painting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/equipment-painting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="equipment-painting-vadodara" />;
}
