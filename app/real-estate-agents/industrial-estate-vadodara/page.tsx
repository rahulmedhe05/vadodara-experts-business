import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-agents")!;

export const metadata: Metadata = {
  title: "Industrial estate in Vadodara | Real Estate Agents | VadodaraExperts",
  description: "Professional industrial estate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-agents/industrial-estate-vadodara" },
  openGraph: {
    title: "Industrial estate in Vadodara | VadodaraExperts",
    description: "Professional industrial estate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-agents/industrial-estate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-estate-vadodara" />;
}
