import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garbage-collection-contractors")!;

export const metadata: Metadata = {
  title: "Roll off container in Vadodara | Garbage Collection Contractors | VadodaraExperts",
  description: "Professional roll off container services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garbage-collection-contractors/roll-off-container-vadodara" },
  openGraph: {
    title: "Roll off container in Vadodara | VadodaraExperts",
    description: "Professional roll off container services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garbage-collection-contractors/roll-off-container-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="roll-off-container-vadodara" />;
}
