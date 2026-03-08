import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "corrosion protection in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional corrosion protection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/corrosion-protection-vadodara" },
  openGraph: {
    title: "corrosion protection in Vadodara | VadodaraExperts",
    description: "Professional corrosion protection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/corrosion-protection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="corrosion-protection-vadodara" />;
}
