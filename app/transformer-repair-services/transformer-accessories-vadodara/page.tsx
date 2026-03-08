import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("transformer-repair-services")!;

export const metadata: Metadata = {
  title: "transformer accessories in Vadodara | Transformer Repair Services | VadodaraExperts",
  description: "Professional transformer accessories services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/transformer-repair-services/transformer-accessories-vadodara" },
  openGraph: {
    title: "transformer accessories in Vadodara | VadodaraExperts",
    description: "Professional transformer accessories services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/transformer-repair-services/transformer-accessories-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="transformer-accessories-vadodara" />;
}
