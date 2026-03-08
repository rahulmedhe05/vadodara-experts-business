import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garbage-collection-contractors")!;

export const metadata: Metadata = {
  title: "Dustbin supplier in Vadodara | Garbage Collection Contractors | VadodaraExperts",
  description: "Professional dustbin supplier services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garbage-collection-contractors/dustbin-supplier-vadodara" },
  openGraph: {
    title: "Dustbin supplier in Vadodara | VadodaraExperts",
    description: "Professional dustbin supplier services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garbage-collection-contractors/dustbin-supplier-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dustbin-supplier-vadodara" />;
}
