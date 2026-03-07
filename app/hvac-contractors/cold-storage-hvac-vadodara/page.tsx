import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hvac-contractors")!;

export const metadata: Metadata = {
  title: "cold storage HVAC in Vadodara | HVAC Contractors | VadodaraExperts",
  description: "Professional cold storage hvac services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hvac-contractors/cold-storage-hvac-vadodara" },
  openGraph: {
    title: "cold storage HVAC in Vadodara | VadodaraExperts",
    description: "Professional cold storage hvac services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hvac-contractors/cold-storage-hvac-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cold-storage-hvac-vadodara" />;
}
