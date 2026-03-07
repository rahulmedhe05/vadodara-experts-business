import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garden-landscaping-services")!;

export const metadata: Metadata = {
  title: "Fruit tree planting in Vadodara | Garden Landscaping Services | VadodaraExperts",
  description: "Professional fruit tree planting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garden-landscaping-services/fruit-tree-planting-vadodara" },
  openGraph: {
    title: "Fruit tree planting in Vadodara | VadodaraExperts",
    description: "Professional fruit tree planting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garden-landscaping-services/fruit-tree-planting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fruit-tree-planting-vadodara" />;
}
