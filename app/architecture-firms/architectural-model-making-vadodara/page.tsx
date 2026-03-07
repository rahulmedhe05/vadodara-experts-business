import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("architecture-firms")!;

export const metadata: Metadata = {
  title: "Architectural model making in Vadodara | Architecture Firms | VadodaraExperts",
  description: "Professional architectural model making services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/architecture-firms/architectural-model-making-vadodara" },
  openGraph: {
    title: "Architectural model making in Vadodara | VadodaraExperts",
    description: "Professional architectural model making services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/architecture-firms/architectural-model-making-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="architectural-model-making-vadodara" />;
}
