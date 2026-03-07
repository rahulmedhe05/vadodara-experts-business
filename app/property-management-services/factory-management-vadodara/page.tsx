import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-management-services")!;

export const metadata: Metadata = {
  title: "Factory management in Vadodara | Property Management Services | VadodaraExperts",
  description: "Professional factory management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-management-services/factory-management-vadodara" },
  openGraph: {
    title: "Factory management in Vadodara | VadodaraExperts",
    description: "Professional factory management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-management-services/factory-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-management-vadodara" />;
}
