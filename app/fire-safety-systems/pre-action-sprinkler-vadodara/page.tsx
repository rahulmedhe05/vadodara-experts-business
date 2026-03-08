import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-systems")!;

export const metadata: Metadata = {
  title: "pre-action sprinkler in Vadodara | Fire Safety Systems | VadodaraExperts",
  description: "Professional pre-action sprinkler services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-systems/pre-action-sprinkler-vadodara" },
  openGraph: {
    title: "pre-action sprinkler in Vadodara | VadodaraExperts",
    description: "Professional pre-action sprinkler services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-systems/pre-action-sprinkler-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pre-action-sprinkler-vadodara" />;
}
