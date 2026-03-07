import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tree-cutting-services")!;

export const metadata: Metadata = {
  title: "Storm damaged tree removal in Vadodara | Tree Cutting Services | VadodaraExperts",
  description: "Professional storm damaged tree removal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tree-cutting-services/storm-damaged-tree-removal-vadodara" },
  openGraph: {
    title: "Storm damaged tree removal in Vadodara | VadodaraExperts",
    description: "Professional storm damaged tree removal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tree-cutting-services/storm-damaged-tree-removal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="storm-damaged-tree-removal-vadodara" />;
}
