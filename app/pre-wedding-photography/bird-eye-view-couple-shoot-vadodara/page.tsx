import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pre-wedding-photography")!;

export const metadata: Metadata = {
  title: "Bird eye view couple shoot in Vadodara | Pre-Wedding Photography | VadodaraExperts",
  description: "Professional bird eye view couple shoot services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pre-wedding-photography/bird-eye-view-couple-shoot-vadodara" },
  openGraph: {
    title: "Bird eye view couple shoot in Vadodara | VadodaraExperts",
    description: "Professional bird eye view couple shoot services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pre-wedding-photography/bird-eye-view-couple-shoot-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bird-eye-view-couple-shoot-vadodara" />;
}
