import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garbage-collection-contractors")!;

export const metadata: Metadata = {
  title: "Construction site cleaning in Vadodara | Garbage Collection Contractors | VadodaraExperts",
  description: "Professional construction site cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garbage-collection-contractors/construction-site-cleaning-vadodara" },
  openGraph: {
    title: "Construction site cleaning in Vadodara | VadodaraExperts",
    description: "Professional construction site cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garbage-collection-contractors/construction-site-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="construction-site-cleaning-vadodara" />;
}
