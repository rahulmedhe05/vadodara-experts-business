import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garbage-collection-contractors")!;

export const metadata: Metadata = {
  title: "Old furniture disposal in Vadodara | Garbage Collection Contractors | VadodaraExperts",
  description: "Professional old furniture disposal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garbage-collection-contractors/old-furniture-disposal-vadodara" },
  openGraph: {
    title: "Old furniture disposal in Vadodara | VadodaraExperts",
    description: "Professional old furniture disposal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garbage-collection-contractors/old-furniture-disposal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="old-furniture-disposal-vadodara" />;
}
