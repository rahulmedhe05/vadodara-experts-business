import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tree-cutting-services")!;

export const metadata: Metadata = {
  title: "Sectional tree felling in Vadodara | Tree Cutting Services | VadodaraExperts",
  description: "Professional sectional tree felling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tree-cutting-services/sectional-tree-felling-vadodara" },
  openGraph: {
    title: "Sectional tree felling in Vadodara | VadodaraExperts",
    description: "Professional sectional tree felling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tree-cutting-services/sectional-tree-felling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sectional-tree-felling-vadodara" />;
}
