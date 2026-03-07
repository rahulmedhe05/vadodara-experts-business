import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garbage-collection-contractors")!;

export const metadata: Metadata = {
  title: "Industrial estate waste collection in Vadodara | Garbage Collection Contractors | VadodaraExperts",
  description: "Professional industrial estate waste collection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garbage-collection-contractors/industrial-estate-waste-collection-vadodara" },
  openGraph: {
    title: "Industrial estate waste collection in Vadodara | VadodaraExperts",
    description: "Professional industrial estate waste collection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garbage-collection-contractors/industrial-estate-waste-collection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-estate-waste-collection-vadodara" />;
}
