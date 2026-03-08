import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Revocation of POA in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional revocation of poa services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/revocation-of-poa-vadodara" },
  openGraph: {
    title: "Revocation of POA in Vadodara | VadodaraExperts",
    description: "Professional revocation of poa services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/revocation-of-poa-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="revocation-of-poa-vadodara" />;
}
