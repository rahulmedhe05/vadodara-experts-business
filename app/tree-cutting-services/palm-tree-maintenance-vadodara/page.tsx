import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tree-cutting-services")!;

export const metadata: Metadata = {
  title: "Palm tree maintenance in Vadodara | Tree Cutting Services | VadodaraExperts",
  description: "Professional palm tree maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tree-cutting-services/palm-tree-maintenance-vadodara" },
  openGraph: {
    title: "Palm tree maintenance in Vadodara | VadodaraExperts",
    description: "Professional palm tree maintenance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tree-cutting-services/palm-tree-maintenance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="palm-tree-maintenance-vadodara" />;
}
