import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-systems")!;

export const metadata: Metadata = {
  title: "fireproof cable in Vadodara | Fire Safety Systems | VadodaraExperts",
  description: "Professional fireproof cable services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-systems/fireproof-cable-vadodara" },
  openGraph: {
    title: "fireproof cable in Vadodara | VadodaraExperts",
    description: "Professional fireproof cable services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-systems/fireproof-cable-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fireproof-cable-vadodara" />;
}
