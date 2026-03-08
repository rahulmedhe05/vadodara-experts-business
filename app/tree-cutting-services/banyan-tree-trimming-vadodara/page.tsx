import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tree-cutting-services")!;

export const metadata: Metadata = {
  title: "Banyan tree trimming in Vadodara | Tree Cutting Services | VadodaraExperts",
  description: "Professional banyan tree trimming services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tree-cutting-services/banyan-tree-trimming-vadodara" },
  openGraph: {
    title: "Banyan tree trimming in Vadodara | VadodaraExperts",
    description: "Professional banyan tree trimming services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tree-cutting-services/banyan-tree-trimming-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="banyan-tree-trimming-vadodara" />;
}
