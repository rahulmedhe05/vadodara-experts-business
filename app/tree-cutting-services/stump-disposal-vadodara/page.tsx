import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tree-cutting-services")!;

export const metadata: Metadata = {
  title: "Stump disposal in Vadodara | Tree Cutting Services | VadodaraExperts",
  description: "Professional stump disposal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tree-cutting-services/stump-disposal-vadodara" },
  openGraph: {
    title: "Stump disposal in Vadodara | VadodaraExperts",
    description: "Professional stump disposal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tree-cutting-services/stump-disposal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="stump-disposal-vadodara" />;
}
