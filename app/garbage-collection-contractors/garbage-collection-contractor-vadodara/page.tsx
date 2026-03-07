import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garbage-collection-contractors")!;

export const metadata: Metadata = {
  title: "Garbage collection contractor in Vadodara | Garbage Collection Contractors | VadodaraExperts",
  description: "Professional garbage collection contractor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garbage-collection-contractors/garbage-collection-contractor-vadodara" },
  openGraph: {
    title: "Garbage collection contractor in Vadodara | VadodaraExperts",
    description: "Professional garbage collection contractor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garbage-collection-contractors/garbage-collection-contractor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="garbage-collection-contractor-vadodara" />;
}
