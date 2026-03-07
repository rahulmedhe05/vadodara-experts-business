import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tree-cutting-services")!;

export const metadata: Metadata = {
  title: "Tree mulching in Vadodara | Tree Cutting Services | VadodaraExperts",
  description: "Professional tree mulching services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tree-cutting-services/tree-mulching-vadodara" },
  openGraph: {
    title: "Tree mulching in Vadodara | VadodaraExperts",
    description: "Professional tree mulching services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tree-cutting-services/tree-mulching-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tree-mulching-vadodara" />;
}
