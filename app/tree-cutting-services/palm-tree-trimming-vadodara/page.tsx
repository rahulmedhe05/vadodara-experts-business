import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tree-cutting-services")!;

export const metadata: Metadata = {
  title: "Palm tree trimming in Vadodara | Tree Cutting Services | VadodaraExperts",
  description: "Professional palm tree trimming services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tree-cutting-services/palm-tree-trimming-vadodara" },
  openGraph: {
    title: "Palm tree trimming in Vadodara | VadodaraExperts",
    description: "Professional palm tree trimming services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tree-cutting-services/palm-tree-trimming-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="palm-tree-trimming-vadodara" />;
}
