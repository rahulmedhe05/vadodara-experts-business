import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("import-consultancy")!;

export const metadata: Metadata = {
  title: "LC negotiation in Vadodara | Import Consultancy | VadodaraExperts",
  description: "Professional lc negotiation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/import-consultancy/lc-negotiation-vadodara" },
  openGraph: {
    title: "LC negotiation in Vadodara | VadodaraExperts",
    description: "Professional lc negotiation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/import-consultancy/lc-negotiation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lc-negotiation-vadodara" />;
}
