import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("transformer-repair-services")!;

export const metadata: Metadata = {
  title: "vacuum drying transformer in Vadodara | Transformer Repair Services | VadodaraExperts",
  description: "Professional vacuum drying transformer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/transformer-repair-services/vacuum-drying-transformer-vadodara" },
  openGraph: {
    title: "vacuum drying transformer in Vadodara | VadodaraExperts",
    description: "Professional vacuum drying transformer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/transformer-repair-services/vacuum-drying-transformer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="vacuum-drying-transformer-vadodara" />;
}
