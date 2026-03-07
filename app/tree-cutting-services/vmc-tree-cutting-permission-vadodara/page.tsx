import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tree-cutting-services")!;

export const metadata: Metadata = {
  title: "VMC tree cutting permission in Vadodara | Tree Cutting Services | VadodaraExperts",
  description: "Professional vmc tree cutting permission services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tree-cutting-services/vmc-tree-cutting-permission-vadodara" },
  openGraph: {
    title: "VMC tree cutting permission in Vadodara | VadodaraExperts",
    description: "Professional vmc tree cutting permission services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tree-cutting-services/vmc-tree-cutting-permission-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="vmc-tree-cutting-permission-vadodara" />;
}
