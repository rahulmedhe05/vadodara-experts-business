import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("transformer-repair-services")!;

export const metadata: Metadata = {
  title: "tank painting transformer in Vadodara | Transformer Repair Services | VadodaraExperts",
  description: "Professional tank painting transformer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/transformer-repair-services/tank-painting-transformer-vadodara" },
  openGraph: {
    title: "tank painting transformer in Vadodara | VadodaraExperts",
    description: "Professional tank painting transformer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/transformer-repair-services/tank-painting-transformer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tank-painting-transformer-vadodara" />;
}
