import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garbage-collection-contractors")!;

export const metadata: Metadata = {
  title: "Scrap dealer in Vadodara | Garbage Collection Contractors | VadodaraExperts",
  description: "Professional scrap dealer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garbage-collection-contractors/scrap-dealer-vadodara" },
  openGraph: {
    title: "Scrap dealer in Vadodara | VadodaraExperts",
    description: "Professional scrap dealer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garbage-collection-contractors/scrap-dealer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="scrap-dealer-vadodara" />;
}
