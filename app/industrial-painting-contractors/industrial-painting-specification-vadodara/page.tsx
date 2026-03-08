import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "industrial painting specification in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional industrial painting specification services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/industrial-painting-specification-vadodara" },
  openGraph: {
    title: "industrial painting specification in Vadodara | VadodaraExperts",
    description: "Professional industrial painting specification services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/industrial-painting-specification-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-painting-specification-vadodara" />;
}
