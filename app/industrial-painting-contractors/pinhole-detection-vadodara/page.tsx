import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "pinhole detection in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional pinhole detection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/pinhole-detection-vadodara" },
  openGraph: {
    title: "pinhole detection in Vadodara | VadodaraExperts",
    description: "Professional pinhole detection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/pinhole-detection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pinhole-detection-vadodara" />;
}
