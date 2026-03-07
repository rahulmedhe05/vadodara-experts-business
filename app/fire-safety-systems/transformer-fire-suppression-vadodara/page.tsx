import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-systems")!;

export const metadata: Metadata = {
  title: "transformer fire suppression in Vadodara | Fire Safety Systems | VadodaraExperts",
  description: "Professional transformer fire suppression services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-systems/transformer-fire-suppression-vadodara" },
  openGraph: {
    title: "transformer fire suppression in Vadodara | VadodaraExperts",
    description: "Professional transformer fire suppression services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-systems/transformer-fire-suppression-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="transformer-fire-suppression-vadodara" />;
}
