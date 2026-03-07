import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("architecture-firms")!;

export const metadata: Metadata = {
  title: "Licensed architect in Vadodara | Architecture Firms | VadodaraExperts",
  description: "Professional licensed architect services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/architecture-firms/licensed-architect-vadodara" },
  openGraph: {
    title: "Licensed architect in Vadodara | VadodaraExperts",
    description: "Professional licensed architect services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/architecture-firms/licensed-architect-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="licensed-architect-vadodara" />;
}
