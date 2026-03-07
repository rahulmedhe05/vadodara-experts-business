import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("transformer-repair-services")!;

export const metadata: Metadata = {
  title: "HT winding repair in Vadodara | Transformer Repair Services | VadodaraExperts",
  description: "Professional ht winding repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/transformer-repair-services/ht-winding-repair-vadodara" },
  openGraph: {
    title: "HT winding repair in Vadodara | VadodaraExperts",
    description: "Professional ht winding repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/transformer-repair-services/ht-winding-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ht-winding-repair-vadodara" />;
}
