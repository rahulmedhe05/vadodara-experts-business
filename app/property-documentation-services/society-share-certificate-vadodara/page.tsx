import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "Society share certificate in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional society share certificate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/society-share-certificate-vadodara" },
  openGraph: {
    title: "Society share certificate in Vadodara | VadodaraExperts",
    description: "Professional society share certificate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/society-share-certificate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="society-share-certificate-vadodara" />;
}
