import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("architecture-firms")!;

export const metadata: Metadata = {
  title: "Net zero building in Vadodara | Architecture Firms | VadodaraExperts",
  description: "Professional net zero building services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/architecture-firms/net-zero-building-vadodara" },
  openGraph: {
    title: "Net zero building in Vadodara | VadodaraExperts",
    description: "Professional net zero building services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/architecture-firms/net-zero-building-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="net-zero-building-vadodara" />;
}
