import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "line marking industrial in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional line marking industrial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/line-marking-industrial-vadodara" },
  openGraph: {
    title: "line marking industrial in Vadodara | VadodaraExperts",
    description: "Professional line marking industrial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/line-marking-industrial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="line-marking-industrial-vadodara" />;
}
