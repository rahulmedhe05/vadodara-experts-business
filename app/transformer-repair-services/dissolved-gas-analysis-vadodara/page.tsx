import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("transformer-repair-services")!;

export const metadata: Metadata = {
  title: "dissolved gas analysis in Vadodara | Transformer Repair Services | VadodaraExperts",
  description: "Professional dissolved gas analysis services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/transformer-repair-services/dissolved-gas-analysis-vadodara" },
  openGraph: {
    title: "dissolved gas analysis in Vadodara | VadodaraExperts",
    description: "Professional dissolved gas analysis services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/transformer-repair-services/dissolved-gas-analysis-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dissolved-gas-analysis-vadodara" />;
}
