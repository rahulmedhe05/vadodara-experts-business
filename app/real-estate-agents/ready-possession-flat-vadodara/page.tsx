import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-agents")!;

export const metadata: Metadata = {
  title: "Ready possession flat in Vadodara | Real Estate Agents | VadodaraExperts",
  description: "Professional ready possession flat services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-agents/ready-possession-flat-vadodara" },
  openGraph: {
    title: "Ready possession flat in Vadodara | VadodaraExperts",
    description: "Professional ready possession flat services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-agents/ready-possession-flat-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ready-possession-flat-vadodara" />;
}
