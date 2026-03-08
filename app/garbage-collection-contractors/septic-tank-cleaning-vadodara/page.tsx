import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garbage-collection-contractors")!;

export const metadata: Metadata = {
  title: "Septic tank cleaning in Vadodara | Garbage Collection Contractors | VadodaraExperts",
  description: "Professional septic tank cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garbage-collection-contractors/septic-tank-cleaning-vadodara" },
  openGraph: {
    title: "Septic tank cleaning in Vadodara | VadodaraExperts",
    description: "Professional septic tank cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garbage-collection-contractors/septic-tank-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="septic-tank-cleaning-vadodara" />;
}
