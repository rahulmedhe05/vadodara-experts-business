import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-management-services")!;

export const metadata: Metadata = {
  title: "Housekeeping management in Vadodara | Property Management Services | VadodaraExperts",
  description: "Professional housekeeping management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-management-services/housekeeping-management-vadodara" },
  openGraph: {
    title: "Housekeeping management in Vadodara | VadodaraExperts",
    description: "Professional housekeeping management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-management-services/housekeeping-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="housekeeping-management-vadodara" />;
}
