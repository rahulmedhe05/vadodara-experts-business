import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tree-cutting-services")!;

export const metadata: Metadata = {
  title: "Construction site tree removal in Vadodara | Tree Cutting Services | VadodaraExperts",
  description: "Professional construction site tree removal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tree-cutting-services/construction-site-tree-removal-vadodara" },
  openGraph: {
    title: "Construction site tree removal in Vadodara | VadodaraExperts",
    description: "Professional construction site tree removal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tree-cutting-services/construction-site-tree-removal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="construction-site-tree-removal-vadodara" />;
}
