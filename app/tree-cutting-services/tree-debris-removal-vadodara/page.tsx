import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tree-cutting-services")!;

export const metadata: Metadata = {
  title: "Tree debris removal in Vadodara | Tree Cutting Services | VadodaraExperts",
  description: "Professional tree debris removal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tree-cutting-services/tree-debris-removal-vadodara" },
  openGraph: {
    title: "Tree debris removal in Vadodara | VadodaraExperts",
    description: "Professional tree debris removal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tree-cutting-services/tree-debris-removal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tree-debris-removal-vadodara" />;
}
