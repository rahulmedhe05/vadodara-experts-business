import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("transformer-repair-services")!;

export const metadata: Metadata = {
  title: "power factor test in Vadodara | Transformer Repair Services | VadodaraExperts",
  description: "Professional power factor test services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/transformer-repair-services/power-factor-test-vadodara" },
  openGraph: {
    title: "power factor test in Vadodara | VadodaraExperts",
    description: "Professional power factor test services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/transformer-repair-services/power-factor-test-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="power-factor-test-vadodara" />;
}
