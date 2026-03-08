import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garbage-collection-contractors")!;

export const metadata: Metadata = {
  title: "Waste container rental in Vadodara | Garbage Collection Contractors | VadodaraExperts",
  description: "Professional waste container rental services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garbage-collection-contractors/waste-container-rental-vadodara" },
  openGraph: {
    title: "Waste container rental in Vadodara | VadodaraExperts",
    description: "Professional waste container rental services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garbage-collection-contractors/waste-container-rental-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="waste-container-rental-vadodara" />;
}
