import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pre-wedding-photography")!;

export const metadata: Metadata = {
  title: "Anniversary photo shoot in Vadodara | Pre-Wedding Photography | VadodaraExperts",
  description: "Professional anniversary photo shoot services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pre-wedding-photography/anniversary-photo-shoot-vadodara" },
  openGraph: {
    title: "Anniversary photo shoot in Vadodara | VadodaraExperts",
    description: "Professional anniversary photo shoot services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pre-wedding-photography/anniversary-photo-shoot-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="anniversary-photo-shoot-vadodara" />;
}
