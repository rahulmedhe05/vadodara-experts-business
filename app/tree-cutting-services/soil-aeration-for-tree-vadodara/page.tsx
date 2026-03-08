import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tree-cutting-services")!;

export const metadata: Metadata = {
  title: "Soil aeration for tree in Vadodara | Tree Cutting Services | VadodaraExperts",
  description: "Professional soil aeration for tree services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tree-cutting-services/soil-aeration-for-tree-vadodara" },
  openGraph: {
    title: "Soil aeration for tree in Vadodara | VadodaraExperts",
    description: "Professional soil aeration for tree services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tree-cutting-services/soil-aeration-for-tree-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="soil-aeration-for-tree-vadodara" />;
}
