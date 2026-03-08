import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tree-cutting-services")!;

export const metadata: Metadata = {
  title: "Tree relocation in Vadodara | Tree Cutting Services | VadodaraExperts",
  description: "Professional tree relocation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tree-cutting-services/tree-relocation-vadodara" },
  openGraph: {
    title: "Tree relocation in Vadodara | VadodaraExperts",
    description: "Professional tree relocation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tree-cutting-services/tree-relocation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tree-relocation-vadodara" />;
}
