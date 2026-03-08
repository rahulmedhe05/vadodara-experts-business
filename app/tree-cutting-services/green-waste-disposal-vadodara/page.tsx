import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tree-cutting-services")!;

export const metadata: Metadata = {
  title: "Green waste disposal in Vadodara | Tree Cutting Services | VadodaraExperts",
  description: "Professional green waste disposal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tree-cutting-services/green-waste-disposal-vadodara" },
  openGraph: {
    title: "Green waste disposal in Vadodara | VadodaraExperts",
    description: "Professional green waste disposal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tree-cutting-services/green-waste-disposal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="green-waste-disposal-vadodara" />;
}
