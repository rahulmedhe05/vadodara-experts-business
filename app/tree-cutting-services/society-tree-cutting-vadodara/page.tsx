import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tree-cutting-services")!;

export const metadata: Metadata = {
  title: "Society tree cutting in Vadodara | Tree Cutting Services | VadodaraExperts",
  description: "Professional society tree cutting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tree-cutting-services/society-tree-cutting-vadodara" },
  openGraph: {
    title: "Society tree cutting in Vadodara | VadodaraExperts",
    description: "Professional society tree cutting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tree-cutting-services/society-tree-cutting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="society-tree-cutting-vadodara" />;
}
