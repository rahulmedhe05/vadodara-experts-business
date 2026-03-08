import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-photography")!;

export const metadata: Metadata = {
  title: "Studio pre wedding shoot in Vadodara | Wedding Photography | VadodaraExperts",
  description: "Professional studio pre wedding shoot services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-photography/studio-pre-wedding-shoot-vadodara" },
  openGraph: {
    title: "Studio pre wedding shoot in Vadodara | VadodaraExperts",
    description: "Professional studio pre wedding shoot services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-photography/studio-pre-wedding-shoot-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="studio-pre-wedding-shoot-vadodara" />;
}
