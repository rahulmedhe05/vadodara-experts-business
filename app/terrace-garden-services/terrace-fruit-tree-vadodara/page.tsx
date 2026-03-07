import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("terrace-garden-services")!;

export const metadata: Metadata = {
  title: "Terrace fruit tree in Vadodara | Terrace Garden Services | VadodaraExperts",
  description: "Professional terrace fruit tree services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/terrace-garden-services/terrace-fruit-tree-vadodara" },
  openGraph: {
    title: "Terrace fruit tree in Vadodara | VadodaraExperts",
    description: "Professional terrace fruit tree services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/terrace-garden-services/terrace-fruit-tree-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="terrace-fruit-tree-vadodara" />;
}
