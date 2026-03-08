import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("facility-management-services")!;

export const metadata: Metadata = {
  title: "Facility management company in Vadodara | Facility Management Services | VadodaraExperts",
  description: "Professional facility management company services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/facility-management-services/facility-management-company-vadodara" },
  openGraph: {
    title: "Facility management company in Vadodara | VadodaraExperts",
    description: "Professional facility management company services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/facility-management-services/facility-management-company-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="facility-management-company-vadodara" />;
}
