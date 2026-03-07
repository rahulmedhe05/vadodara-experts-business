import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garbage-collection-contractors")!;

export const metadata: Metadata = {
  title: "Compactor rental in Vadodara | Garbage Collection Contractors | VadodaraExperts",
  description: "Professional compactor rental services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garbage-collection-contractors/compactor-rental-vadodara" },
  openGraph: {
    title: "Compactor rental in Vadodara | VadodaraExperts",
    description: "Professional compactor rental services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garbage-collection-contractors/compactor-rental-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="compactor-rental-vadodara" />;
}
