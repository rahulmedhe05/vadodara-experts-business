import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-management-services")!;

export const metadata: Metadata = {
  title: "Society vendor management in Vadodara | Property Management Services | VadodaraExperts",
  description: "Professional society vendor management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-management-services/society-vendor-management-vadodara" },
  openGraph: {
    title: "Society vendor management in Vadodara | VadodaraExperts",
    description: "Professional society vendor management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-management-services/society-vendor-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="society-vendor-management-vadodara" />;
}
