import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tree-cutting-services")!;

export const metadata: Metadata = {
  title: "Coconut tree cleaning in Vadodara | Tree Cutting Services | VadodaraExperts",
  description: "Professional coconut tree cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tree-cutting-services/coconut-tree-cleaning-vadodara" },
  openGraph: {
    title: "Coconut tree cleaning in Vadodara | VadodaraExperts",
    description: "Professional coconut tree cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tree-cutting-services/coconut-tree-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="coconut-tree-cleaning-vadodara" />;
}
