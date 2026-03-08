import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tree-cutting-services")!;

export const metadata: Metadata = {
  title: "Tree transportation in Vadodara | Tree Cutting Services | VadodaraExperts",
  description: "Professional tree transportation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tree-cutting-services/tree-transportation-vadodara" },
  openGraph: {
    title: "Tree transportation in Vadodara | VadodaraExperts",
    description: "Professional tree transportation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tree-cutting-services/tree-transportation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tree-transportation-vadodara" />;
}
