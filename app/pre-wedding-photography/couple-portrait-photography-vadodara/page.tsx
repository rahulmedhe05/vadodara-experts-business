import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pre-wedding-photography")!;

export const metadata: Metadata = {
  title: "Couple portrait photography in Vadodara | Pre-Wedding Photography | VadodaraExperts",
  description: "Professional couple portrait photography services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pre-wedding-photography/couple-portrait-photography-vadodara" },
  openGraph: {
    title: "Couple portrait photography in Vadodara | VadodaraExperts",
    description: "Professional couple portrait photography services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pre-wedding-photography/couple-portrait-photography-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="couple-portrait-photography-vadodara" />;
}
