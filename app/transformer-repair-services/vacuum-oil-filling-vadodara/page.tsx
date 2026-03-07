import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("transformer-repair-services")!;

export const metadata: Metadata = {
  title: "vacuum oil filling in Vadodara | Transformer Repair Services | VadodaraExperts",
  description: "Professional vacuum oil filling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/transformer-repair-services/vacuum-oil-filling-vadodara" },
  openGraph: {
    title: "vacuum oil filling in Vadodara | VadodaraExperts",
    description: "Professional vacuum oil filling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/transformer-repair-services/vacuum-oil-filling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="vacuum-oil-filling-vadodara" />;
}
