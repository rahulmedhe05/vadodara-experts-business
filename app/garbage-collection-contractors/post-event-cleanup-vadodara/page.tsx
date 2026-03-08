import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garbage-collection-contractors")!;

export const metadata: Metadata = {
  title: "Post event cleanup in Vadodara | Garbage Collection Contractors | VadodaraExperts",
  description: "Professional post event cleanup services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garbage-collection-contractors/post-event-cleanup-vadodara" },
  openGraph: {
    title: "Post event cleanup in Vadodara | VadodaraExperts",
    description: "Professional post event cleanup services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garbage-collection-contractors/post-event-cleanup-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="post-event-cleanup-vadodara" />;
}
