import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-photography")!;

export const metadata: Metadata = {
  title: "Pre wedding shoot location in Vadodara | Wedding Photography | VadodaraExperts",
  description: "Professional pre wedding shoot location services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-photography/pre-wedding-shoot-location-vadodara" },
  openGraph: {
    title: "Pre wedding shoot location in Vadodara | VadodaraExperts",
    description: "Professional pre wedding shoot location services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-photography/pre-wedding-shoot-location-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pre-wedding-shoot-location-vadodara" />;
}
