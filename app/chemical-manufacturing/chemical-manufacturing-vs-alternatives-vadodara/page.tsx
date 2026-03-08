import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chemical-manufacturing")!;

export const metadata: Metadata = {
  title: "Chemical Manufacturing Vs Alternatives in Vadodara | Chemical Manufacturing | VadodaraExperts",
  description: "Professional chemical manufacturing vs alternatives services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chemical-manufacturing/chemical-manufacturing-vs-alternatives-vadodara" },
  openGraph: {
    title: "Chemical Manufacturing Vs Alternatives in Vadodara | VadodaraExperts",
    description: "Professional chemical manufacturing vs alternatives services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chemical-manufacturing/chemical-manufacturing-vs-alternatives-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chemical-manufacturing-vs-alternatives-vadodara" />;
}
