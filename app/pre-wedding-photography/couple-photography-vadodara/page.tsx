import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pre-wedding-photography")!;

export const metadata: Metadata = {
  title: "Couple photography in Vadodara | Pre-Wedding Photography | VadodaraExperts",
  description: "Professional couple photography services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pre-wedding-photography/couple-photography-vadodara" },
  openGraph: {
    title: "Couple photography in Vadodara | VadodaraExperts",
    description: "Professional couple photography services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pre-wedding-photography/couple-photography-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="couple-photography-vadodara" />;
}
