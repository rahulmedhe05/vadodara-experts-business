import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garbage-collection-contractors")!;

export const metadata: Metadata = {
  title: "Plastic recycling in Vadodara | Garbage Collection Contractors | VadodaraExperts",
  description: "Professional plastic recycling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garbage-collection-contractors/plastic-recycling-vadodara" },
  openGraph: {
    title: "Plastic recycling in Vadodara | VadodaraExperts",
    description: "Professional plastic recycling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garbage-collection-contractors/plastic-recycling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plastic-recycling-vadodara" />;
}
