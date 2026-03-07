import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("transformer-repair-services")!;

export const metadata: Metadata = {
  title: "SFRA test in Vadodara | Transformer Repair Services | VadodaraExperts",
  description: "Professional sfra test services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/transformer-repair-services/sfra-test-vadodara" },
  openGraph: {
    title: "SFRA test in Vadodara | VadodaraExperts",
    description: "Professional sfra test services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/transformer-repair-services/sfra-test-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sfra-test-vadodara" />;
}
