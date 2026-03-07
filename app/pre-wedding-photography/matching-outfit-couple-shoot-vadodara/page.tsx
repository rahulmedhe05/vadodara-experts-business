import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pre-wedding-photography")!;

export const metadata: Metadata = {
  title: "Matching outfit couple shoot in Vadodara | Pre-Wedding Photography | VadodaraExperts",
  description: "Professional matching outfit couple shoot services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pre-wedding-photography/matching-outfit-couple-shoot-vadodara" },
  openGraph: {
    title: "Matching outfit couple shoot in Vadodara | VadodaraExperts",
    description: "Professional matching outfit couple shoot services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pre-wedding-photography/matching-outfit-couple-shoot-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="matching-outfit-couple-shoot-vadodara" />;
}
