import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("infrastructure-consultancy")!;

export const metadata: Metadata = {
  title: "technical feasibility in Vadodara | Infrastructure Consultancy | VadodaraExperts",
  description: "Professional technical feasibility services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/infrastructure-consultancy/technical-feasibility-vadodara" },
  openGraph: {
    title: "technical feasibility in Vadodara | VadodaraExperts",
    description: "Professional technical feasibility services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/infrastructure-consultancy/technical-feasibility-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="technical-feasibility-vadodara" />;
}
