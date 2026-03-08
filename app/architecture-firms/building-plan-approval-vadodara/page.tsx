import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("architecture-firms")!;

export const metadata: Metadata = {
  title: "Building plan approval in Vadodara | Architecture Firms | VadodaraExperts",
  description: "Professional building plan approval services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/architecture-firms/building-plan-approval-vadodara" },
  openGraph: {
    title: "Building plan approval in Vadodara | VadodaraExperts",
    description: "Professional building plan approval services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/architecture-firms/building-plan-approval-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="building-plan-approval-vadodara" />;
}
