import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garbage-collection-contractors")!;

export const metadata: Metadata = {
  title: "Excavation waste removal in Vadodara | Garbage Collection Contractors | VadodaraExperts",
  description: "Professional excavation waste removal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garbage-collection-contractors/excavation-waste-removal-vadodara" },
  openGraph: {
    title: "Excavation waste removal in Vadodara | VadodaraExperts",
    description: "Professional excavation waste removal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garbage-collection-contractors/excavation-waste-removal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="excavation-waste-removal-vadodara" />;
}
