import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pre-wedding-photography")!;

export const metadata: Metadata = {
  title: "EME Temple pre wedding in Vadodara | Pre-Wedding Photography | VadodaraExperts",
  description: "Professional eme temple pre wedding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pre-wedding-photography/eme-temple-pre-wedding-vadodara" },
  openGraph: {
    title: "EME Temple pre wedding in Vadodara | VadodaraExperts",
    description: "Professional eme temple pre wedding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pre-wedding-photography/eme-temple-pre-wedding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="eme-temple-pre-wedding-vadodara" />;
}
