import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pre-wedding-photography")!;

export const metadata: Metadata = {
  title: "Bollywood style pre wedding in Vadodara | Pre-Wedding Photography | VadodaraExperts",
  description: "Professional bollywood style pre wedding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pre-wedding-photography/bollywood-style-pre-wedding-vadodara" },
  openGraph: {
    title: "Bollywood style pre wedding in Vadodara | VadodaraExperts",
    description: "Professional bollywood style pre wedding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pre-wedding-photography/bollywood-style-pre-wedding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bollywood-style-pre-wedding-vadodara" />;
}
