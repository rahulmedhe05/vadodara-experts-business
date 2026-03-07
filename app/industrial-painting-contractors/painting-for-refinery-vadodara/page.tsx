import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "painting for refinery in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional painting for refinery services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/painting-for-refinery-vadodara" },
  openGraph: {
    title: "painting for refinery in Vadodara | VadodaraExperts",
    description: "Professional painting for refinery services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/painting-for-refinery-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="painting-for-refinery-vadodara" />;
}
