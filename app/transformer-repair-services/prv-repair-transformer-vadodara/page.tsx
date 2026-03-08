import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("transformer-repair-services")!;

export const metadata: Metadata = {
  title: "PRV repair transformer in Vadodara | Transformer Repair Services | VadodaraExperts",
  description: "Professional prv repair transformer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/transformer-repair-services/prv-repair-transformer-vadodara" },
  openGraph: {
    title: "PRV repair transformer in Vadodara | VadodaraExperts",
    description: "Professional prv repair transformer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/transformer-repair-services/prv-repair-transformer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="prv-repair-transformer-vadodara" />;
}
