import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garbage-collection-contractors")!;

export const metadata: Metadata = {
  title: "Colony garbage pickup in Vadodara | Garbage Collection Contractors | VadodaraExperts",
  description: "Professional colony garbage pickup services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garbage-collection-contractors/colony-garbage-pickup-vadodara" },
  openGraph: {
    title: "Colony garbage pickup in Vadodara | VadodaraExperts",
    description: "Professional colony garbage pickup services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garbage-collection-contractors/colony-garbage-pickup-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="colony-garbage-pickup-vadodara" />;
}
