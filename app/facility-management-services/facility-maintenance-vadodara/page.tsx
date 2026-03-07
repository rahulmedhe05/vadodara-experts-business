import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("facility-management-services")!;

export const metadata: Metadata = {
  title: "Facility maintenance in Vadodara | Facility Management Services | VadodaraExperts",
  description: "Professional facility maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/facility-management-services/facility-maintenance-vadodara" },
  openGraph: {
    title: "Facility maintenance in Vadodara | VadodaraExperts",
    description: "Professional facility maintenance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/facility-management-services/facility-maintenance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="facility-maintenance-vadodara" />;
}
