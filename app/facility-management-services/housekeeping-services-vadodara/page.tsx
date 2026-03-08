import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("facility-management-services")!;

export const metadata: Metadata = {
  title: "Housekeeping services in Vadodara | Facility Management Services | VadodaraExperts",
  description: "Professional housekeeping services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/facility-management-services/housekeeping-services-vadodara" },
  openGraph: {
    title: "Housekeeping services in Vadodara | VadodaraExperts",
    description: "Professional housekeeping services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/facility-management-services/housekeeping-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="housekeeping-services-vadodara" />;
}
