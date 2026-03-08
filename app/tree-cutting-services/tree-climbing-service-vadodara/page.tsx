import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tree-cutting-services")!;

export const metadata: Metadata = {
  title: "Tree climbing service in Vadodara | Tree Cutting Services | VadodaraExperts",
  description: "Professional tree climbing service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tree-cutting-services/tree-climbing-service-vadodara" },
  openGraph: {
    title: "Tree climbing service in Vadodara | VadodaraExperts",
    description: "Professional tree climbing service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tree-cutting-services/tree-climbing-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tree-climbing-service-vadodara" />;
}
