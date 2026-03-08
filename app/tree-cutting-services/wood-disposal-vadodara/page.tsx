import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tree-cutting-services")!;

export const metadata: Metadata = {
  title: "Wood disposal in Vadodara | Tree Cutting Services | VadodaraExperts",
  description: "Professional wood disposal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tree-cutting-services/wood-disposal-vadodara" },
  openGraph: {
    title: "Wood disposal in Vadodara | VadodaraExperts",
    description: "Professional wood disposal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tree-cutting-services/wood-disposal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wood-disposal-vadodara" />;
}
