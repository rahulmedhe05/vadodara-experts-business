import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tree-cutting-services")!;

export const metadata: Metadata = {
  title: "Mango tree pruning in Vadodara | Tree Cutting Services | VadodaraExperts",
  description: "Professional mango tree pruning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tree-cutting-services/mango-tree-pruning-vadodara" },
  openGraph: {
    title: "Mango tree pruning in Vadodara | VadodaraExperts",
    description: "Professional mango tree pruning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tree-cutting-services/mango-tree-pruning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mango-tree-pruning-vadodara" />;
}
