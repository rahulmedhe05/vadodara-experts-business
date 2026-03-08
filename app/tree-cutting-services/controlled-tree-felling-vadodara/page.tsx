import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tree-cutting-services")!;

export const metadata: Metadata = {
  title: "Controlled tree felling in Vadodara | Tree Cutting Services | VadodaraExperts",
  description: "Professional controlled tree felling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tree-cutting-services/controlled-tree-felling-vadodara" },
  openGraph: {
    title: "Controlled tree felling in Vadodara | VadodaraExperts",
    description: "Professional controlled tree felling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tree-cutting-services/controlled-tree-felling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="controlled-tree-felling-vadodara" />;
}
