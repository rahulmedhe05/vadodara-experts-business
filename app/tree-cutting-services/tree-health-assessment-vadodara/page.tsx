import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tree-cutting-services")!;

export const metadata: Metadata = {
  title: "Tree health assessment in Vadodara | Tree Cutting Services | VadodaraExperts",
  description: "Professional tree health assessment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tree-cutting-services/tree-health-assessment-vadodara" },
  openGraph: {
    title: "Tree health assessment in Vadodara | VadodaraExperts",
    description: "Professional tree health assessment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tree-cutting-services/tree-health-assessment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tree-health-assessment-vadodara" />;
}
