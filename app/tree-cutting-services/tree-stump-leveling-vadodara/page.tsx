import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tree-cutting-services")!;

export const metadata: Metadata = {
  title: "Tree stump leveling in Vadodara | Tree Cutting Services | VadodaraExperts",
  description: "Professional tree stump leveling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tree-cutting-services/tree-stump-leveling-vadodara" },
  openGraph: {
    title: "Tree stump leveling in Vadodara | VadodaraExperts",
    description: "Professional tree stump leveling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tree-cutting-services/tree-stump-leveling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tree-stump-leveling-vadodara" />;
}
