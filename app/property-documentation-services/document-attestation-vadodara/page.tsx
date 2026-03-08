import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "Document attestation in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional document attestation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/document-attestation-vadodara" },
  openGraph: {
    title: "Document attestation in Vadodara | VadodaraExperts",
    description: "Professional document attestation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/document-attestation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="document-attestation-vadodara" />;
}
