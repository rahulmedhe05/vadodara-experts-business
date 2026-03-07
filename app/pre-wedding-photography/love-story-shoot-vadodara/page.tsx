import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pre-wedding-photography")!;

export const metadata: Metadata = {
  title: "Love story shoot in Vadodara | Pre-Wedding Photography | VadodaraExperts",
  description: "Professional love story shoot services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pre-wedding-photography/love-story-shoot-vadodara" },
  openGraph: {
    title: "Love story shoot in Vadodara | VadodaraExperts",
    description: "Professional love story shoot services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pre-wedding-photography/love-story-shoot-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="love-story-shoot-vadodara" />;
}
