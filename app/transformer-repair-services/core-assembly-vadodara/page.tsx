import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("transformer-repair-services")!;

export const metadata: Metadata = {
  title: "core assembly in Vadodara | Transformer Repair Services | VadodaraExperts",
  description: "Professional core assembly services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/transformer-repair-services/core-assembly-vadodara" },
  openGraph: {
    title: "core assembly in Vadodara | VadodaraExperts",
    description: "Professional core assembly services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/transformer-repair-services/core-assembly-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="core-assembly-vadodara" />;
}
