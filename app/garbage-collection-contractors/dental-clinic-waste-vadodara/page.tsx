import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garbage-collection-contractors")!;

export const metadata: Metadata = {
  title: "Dental clinic waste in Vadodara | Garbage Collection Contractors | VadodaraExperts",
  description: "Professional dental clinic waste services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garbage-collection-contractors/dental-clinic-waste-vadodara" },
  openGraph: {
    title: "Dental clinic waste in Vadodara | VadodaraExperts",
    description: "Professional dental clinic waste services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garbage-collection-contractors/dental-clinic-waste-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dental-clinic-waste-vadodara" />;
}
