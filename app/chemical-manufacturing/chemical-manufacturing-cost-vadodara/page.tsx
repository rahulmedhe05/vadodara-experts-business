import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chemical-manufacturing")!;

export const metadata: Metadata = {
  title: "Chemical Manufacturing Cost in Vadodara | Chemical Manufacturing | VadodaraExperts",
  description: "Professional chemical manufacturing cost services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chemical-manufacturing/chemical-manufacturing-cost-vadodara" },
  openGraph: {
    title: "Chemical Manufacturing Cost in Vadodara | VadodaraExperts",
    description: "Professional chemical manufacturing cost services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chemical-manufacturing/chemical-manufacturing-cost-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chemical-manufacturing-cost-vadodara" />;
}
