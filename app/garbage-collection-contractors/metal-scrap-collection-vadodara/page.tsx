import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garbage-collection-contractors")!;

export const metadata: Metadata = {
  title: "Metal scrap collection in Vadodara | Garbage Collection Contractors | VadodaraExperts",
  description: "Professional metal scrap collection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garbage-collection-contractors/metal-scrap-collection-vadodara" },
  openGraph: {
    title: "Metal scrap collection in Vadodara | VadodaraExperts",
    description: "Professional metal scrap collection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garbage-collection-contractors/metal-scrap-collection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="metal-scrap-collection-vadodara" />;
}
