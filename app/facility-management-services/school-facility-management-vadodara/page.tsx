import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("facility-management-services")!;

export const metadata: Metadata = {
  title: "School facility management in Vadodara | Facility Management Services | VadodaraExperts",
  description: "Professional school facility management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/facility-management-services/school-facility-management-vadodara" },
  openGraph: {
    title: "School facility management in Vadodara | VadodaraExperts",
    description: "Professional school facility management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/facility-management-services/school-facility-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="school-facility-management-vadodara" />;
}
