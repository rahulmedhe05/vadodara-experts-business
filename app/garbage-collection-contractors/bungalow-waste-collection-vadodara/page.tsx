import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garbage-collection-contractors")!;

export const metadata: Metadata = {
  title: "Bungalow waste collection in Vadodara | Garbage Collection Contractors | VadodaraExperts",
  description: "Professional bungalow waste collection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garbage-collection-contractors/bungalow-waste-collection-vadodara" },
  openGraph: {
    title: "Bungalow waste collection in Vadodara | VadodaraExperts",
    description: "Professional bungalow waste collection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garbage-collection-contractors/bungalow-waste-collection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bungalow-waste-collection-vadodara" />;
}
