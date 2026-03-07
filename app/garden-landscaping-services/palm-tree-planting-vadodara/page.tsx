import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garden-landscaping-services")!;

export const metadata: Metadata = {
  title: "Palm tree planting in Vadodara | Garden Landscaping Services | VadodaraExperts",
  description: "Professional palm tree planting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garden-landscaping-services/palm-tree-planting-vadodara" },
  openGraph: {
    title: "Palm tree planting in Vadodara | VadodaraExperts",
    description: "Professional palm tree planting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garden-landscaping-services/palm-tree-planting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="palm-tree-planting-vadodara" />;
}
