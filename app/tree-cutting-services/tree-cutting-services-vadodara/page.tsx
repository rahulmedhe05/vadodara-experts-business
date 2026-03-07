import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tree-cutting-services")!;

export const metadata: Metadata = {
  title: "Tree cutting services in Vadodara | Tree Cutting Services | VadodaraExperts",
  description: "Professional tree cutting services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tree-cutting-services/tree-cutting-services-vadodara" },
  openGraph: {
    title: "Tree cutting services in Vadodara | VadodaraExperts",
    description: "Professional tree cutting services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tree-cutting-services/tree-cutting-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tree-cutting-services-vadodara" />;
}
