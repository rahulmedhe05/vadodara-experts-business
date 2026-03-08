import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "cross cut test in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional cross cut test services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/cross-cut-test-vadodara" },
  openGraph: {
    title: "cross cut test in Vadodara | VadodaraExperts",
    description: "Professional cross cut test services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/cross-cut-test-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cross-cut-test-vadodara" />;
}
