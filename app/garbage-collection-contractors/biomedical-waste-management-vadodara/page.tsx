import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garbage-collection-contractors")!;

export const metadata: Metadata = {
  title: "Biomedical waste management in Vadodara | Garbage Collection Contractors | VadodaraExperts",
  description: "Professional biomedical waste management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garbage-collection-contractors/biomedical-waste-management-vadodara" },
  openGraph: {
    title: "Biomedical waste management in Vadodara | VadodaraExperts",
    description: "Professional biomedical waste management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garbage-collection-contractors/biomedical-waste-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="biomedical-waste-management-vadodara" />;
}
