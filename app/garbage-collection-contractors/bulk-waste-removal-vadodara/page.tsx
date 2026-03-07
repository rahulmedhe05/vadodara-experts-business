import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garbage-collection-contractors")!;

export const metadata: Metadata = {
  title: "Bulk waste removal in Vadodara | Garbage Collection Contractors | VadodaraExperts",
  description: "Professional bulk waste removal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garbage-collection-contractors/bulk-waste-removal-vadodara" },
  openGraph: {
    title: "Bulk waste removal in Vadodara | VadodaraExperts",
    description: "Professional bulk waste removal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garbage-collection-contractors/bulk-waste-removal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bulk-waste-removal-vadodara" />;
}
