import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "anti-corrosive painting in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional anti-corrosive painting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/anti-corrosive-painting-vadodara" },
  openGraph: {
    title: "anti-corrosive painting in Vadodara | VadodaraExperts",
    description: "Professional anti-corrosive painting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/anti-corrosive-painting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="anti-corrosive-painting-vadodara" />;
}
