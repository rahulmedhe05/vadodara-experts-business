import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chemical-manufacturing")!;

export const metadata: Metadata = {
  title: "Chemical Manufacturing Eco Friendly in Vadodara | Chemical Manufacturing | VadodaraExperts",
  description: "Professional chemical manufacturing eco friendly services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chemical-manufacturing/chemical-manufacturing-eco-friendly-vadodara" },
  openGraph: {
    title: "Chemical Manufacturing Eco Friendly in Vadodara | VadodaraExperts",
    description: "Professional chemical manufacturing eco friendly services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chemical-manufacturing/chemical-manufacturing-eco-friendly-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chemical-manufacturing-eco-friendly-vadodara" />;
}
