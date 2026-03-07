import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pre-wedding-photography")!;

export const metadata: Metadata = {
  title: "Pre wedding shoot with props in Vadodara | Pre-Wedding Photography | VadodaraExperts",
  description: "Professional pre wedding shoot with props services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pre-wedding-photography/pre-wedding-shoot-with-props-vadodara" },
  openGraph: {
    title: "Pre wedding shoot with props in Vadodara | VadodaraExperts",
    description: "Professional pre wedding shoot with props services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pre-wedding-photography/pre-wedding-shoot-with-props-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pre-wedding-shoot-with-props-vadodara" />;
}
