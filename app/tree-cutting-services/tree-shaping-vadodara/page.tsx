import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tree-cutting-services")!;

export const metadata: Metadata = {
  title: "Tree shaping in Vadodara | Tree Cutting Services | VadodaraExperts",
  description: "Professional tree shaping services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tree-cutting-services/tree-shaping-vadodara" },
  openGraph: {
    title: "Tree shaping in Vadodara | VadodaraExperts",
    description: "Professional tree shaping services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tree-cutting-services/tree-shaping-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tree-shaping-vadodara" />;
}
