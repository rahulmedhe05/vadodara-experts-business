import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tree-cutting-services")!;

export const metadata: Metadata = {
  title: "Hedge trimming in Vadodara | Tree Cutting Services | VadodaraExperts",
  description: "Professional hedge trimming services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tree-cutting-services/hedge-trimming-vadodara" },
  openGraph: {
    title: "Hedge trimming in Vadodara | VadodaraExperts",
    description: "Professional hedge trimming services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tree-cutting-services/hedge-trimming-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hedge-trimming-vadodara" />;
}
