import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garbage-collection-contractors")!;

export const metadata: Metadata = {
  title: "Glass waste collection in Vadodara | Garbage Collection Contractors | VadodaraExperts",
  description: "Professional glass waste collection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garbage-collection-contractors/glass-waste-collection-vadodara" },
  openGraph: {
    title: "Glass waste collection in Vadodara | VadodaraExperts",
    description: "Professional glass waste collection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garbage-collection-contractors/glass-waste-collection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="glass-waste-collection-vadodara" />;
}
