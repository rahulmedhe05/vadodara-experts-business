import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-agents")!;

export const metadata: Metadata = {
  title: "Commercial complex in Vadodara | Real Estate Agents | VadodaraExperts",
  description: "Professional commercial complex services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-agents/commercial-complex-vadodara" },
  openGraph: {
    title: "Commercial complex in Vadodara | VadodaraExperts",
    description: "Professional commercial complex services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-agents/commercial-complex-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="commercial-complex-vadodara" />;
}
