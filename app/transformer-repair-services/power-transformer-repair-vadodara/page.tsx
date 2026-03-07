import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("transformer-repair-services")!;

export const metadata: Metadata = {
  title: "power transformer repair in Vadodara | Transformer Repair Services | VadodaraExperts",
  description: "Professional power transformer repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/transformer-repair-services/power-transformer-repair-vadodara" },
  openGraph: {
    title: "power transformer repair in Vadodara | VadodaraExperts",
    description: "Professional power transformer repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/transformer-repair-services/power-transformer-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="power-transformer-repair-vadodara" />;
}
