import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("transformer-repair-services")!;

export const metadata: Metadata = {
  title: "conservator repair in Vadodara | Transformer Repair Services | VadodaraExperts",
  description: "Professional conservator repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/transformer-repair-services/conservator-repair-vadodara" },
  openGraph: {
    title: "conservator repair in Vadodara | VadodaraExperts",
    description: "Professional conservator repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/transformer-repair-services/conservator-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="conservator-repair-vadodara" />;
}
