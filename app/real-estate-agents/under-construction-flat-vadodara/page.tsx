import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-agents")!;

export const metadata: Metadata = {
  title: "Under construction flat in Vadodara | Real Estate Agents | VadodaraExperts",
  description: "Professional under construction flat services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-agents/under-construction-flat-vadodara" },
  openGraph: {
    title: "Under construction flat in Vadodara | VadodaraExperts",
    description: "Professional under construction flat services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-agents/under-construction-flat-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="under-construction-flat-vadodara" />;
}
