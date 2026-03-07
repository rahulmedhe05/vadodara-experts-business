import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garbage-collection-contractors")!;

export const metadata: Metadata = {
  title: "Hospital waste disposal in Vadodara | Garbage Collection Contractors | VadodaraExperts",
  description: "Professional hospital waste disposal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garbage-collection-contractors/hospital-waste-disposal-vadodara" },
  openGraph: {
    title: "Hospital waste disposal in Vadodara | VadodaraExperts",
    description: "Professional hospital waste disposal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garbage-collection-contractors/hospital-waste-disposal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hospital-waste-disposal-vadodara" />;
}
