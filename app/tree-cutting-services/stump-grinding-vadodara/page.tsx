import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tree-cutting-services")!;

export const metadata: Metadata = {
  title: "Stump grinding in Vadodara | Tree Cutting Services | VadodaraExperts",
  description: "Professional stump grinding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tree-cutting-services/stump-grinding-vadodara" },
  openGraph: {
    title: "Stump grinding in Vadodara | VadodaraExperts",
    description: "Professional stump grinding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tree-cutting-services/stump-grinding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="stump-grinding-vadodara" />;
}
