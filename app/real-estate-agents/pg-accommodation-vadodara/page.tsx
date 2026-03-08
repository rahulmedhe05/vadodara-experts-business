import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-agents")!;

export const metadata: Metadata = {
  title: "PG accommodation in Vadodara | Real Estate Agents | VadodaraExperts",
  description: "Professional pg accommodation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-agents/pg-accommodation-vadodara" },
  openGraph: {
    title: "PG accommodation in Vadodara | VadodaraExperts",
    description: "Professional pg accommodation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-agents/pg-accommodation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pg-accommodation-vadodara" />;
}
