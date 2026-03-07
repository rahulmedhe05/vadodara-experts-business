import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-agents")!;

export const metadata: Metadata = {
  title: "Co working space in Vadodara | Real Estate Agents | VadodaraExperts",
  description: "Professional co working space services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-agents/co-working-space-vadodara" },
  openGraph: {
    title: "Co working space in Vadodara | VadodaraExperts",
    description: "Professional co working space services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-agents/co-working-space-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="co-working-space-vadodara" />;
}
