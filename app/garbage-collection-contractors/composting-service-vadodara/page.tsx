import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garbage-collection-contractors")!;

export const metadata: Metadata = {
  title: "Composting service in Vadodara | Garbage Collection Contractors | VadodaraExperts",
  description: "Professional composting service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garbage-collection-contractors/composting-service-vadodara" },
  openGraph: {
    title: "Composting service in Vadodara | VadodaraExperts",
    description: "Professional composting service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garbage-collection-contractors/composting-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="composting-service-vadodara" />;
}
