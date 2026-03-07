import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("architecture-firms")!;

export const metadata: Metadata = {
  title: "IGBC certification in Vadodara | Architecture Firms | VadodaraExperts",
  description: "Professional igbc certification services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/architecture-firms/igbc-certification-vadodara" },
  openGraph: {
    title: "IGBC certification in Vadodara | VadodaraExperts",
    description: "Professional igbc certification services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/architecture-firms/igbc-certification-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="igbc-certification-vadodara" />;
}
