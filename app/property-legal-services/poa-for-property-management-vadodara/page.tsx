import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "POA for property management in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional poa for property management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/poa-for-property-management-vadodara" },
  openGraph: {
    title: "POA for property management in Vadodara | VadodaraExperts",
    description: "Professional poa for property management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/poa-for-property-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="poa-for-property-management-vadodara" />;
}
