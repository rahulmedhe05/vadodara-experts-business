import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "bridge painting in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional bridge painting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/bridge-painting-vadodara" },
  openGraph: {
    title: "bridge painting in Vadodara | VadodaraExperts",
    description: "Professional bridge painting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/bridge-painting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bridge-painting-vadodara" />;
}
