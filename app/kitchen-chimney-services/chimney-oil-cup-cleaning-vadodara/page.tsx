import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("kitchen-chimney-services")!;

export const metadata: Metadata = {
  title: "Chimney oil cup cleaning in Vadodara | Kitchen Chimney Services | VadodaraExperts",
  description: "Professional chimney oil cup cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/kitchen-chimney-services/chimney-oil-cup-cleaning-vadodara" },
  openGraph: {
    title: "Chimney oil cup cleaning in Vadodara | VadodaraExperts",
    description: "Professional chimney oil cup cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/kitchen-chimney-services/chimney-oil-cup-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chimney-oil-cup-cleaning-vadodara" />;
}
