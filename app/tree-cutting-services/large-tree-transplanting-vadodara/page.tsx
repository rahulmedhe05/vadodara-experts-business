import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tree-cutting-services")!;

export const metadata: Metadata = {
  title: "Large tree transplanting in Vadodara | Tree Cutting Services | VadodaraExperts",
  description: "Professional large tree transplanting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tree-cutting-services/large-tree-transplanting-vadodara" },
  openGraph: {
    title: "Large tree transplanting in Vadodara | VadodaraExperts",
    description: "Professional large tree transplanting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tree-cutting-services/large-tree-transplanting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="large-tree-transplanting-vadodara" />;
}
