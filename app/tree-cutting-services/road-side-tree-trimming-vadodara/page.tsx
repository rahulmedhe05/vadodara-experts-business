import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tree-cutting-services")!;

export const metadata: Metadata = {
  title: "Road side tree trimming in Vadodara | Tree Cutting Services | VadodaraExperts",
  description: "Professional road side tree trimming services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tree-cutting-services/road-side-tree-trimming-vadodara" },
  openGraph: {
    title: "Road side tree trimming in Vadodara | VadodaraExperts",
    description: "Professional road side tree trimming services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tree-cutting-services/road-side-tree-trimming-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="road-side-tree-trimming-vadodara" />;
}
