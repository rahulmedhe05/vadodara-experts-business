import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garbage-collection-contractors")!;

export const metadata: Metadata = {
  title: "Home garbage collection in Vadodara | Garbage Collection Contractors | VadodaraExperts",
  description: "Professional home garbage collection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garbage-collection-contractors/home-garbage-collection-vadodara" },
  openGraph: {
    title: "Home garbage collection in Vadodara | VadodaraExperts",
    description: "Professional home garbage collection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garbage-collection-contractors/home-garbage-collection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="home-garbage-collection-vadodara" />;
}
