import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("facility-management-services")!;

export const metadata: Metadata = {
  title: "Access control maintenance in Vadodara | Facility Management Services | VadodaraExperts",
  description: "Professional access control maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/facility-management-services/access-control-maintenance-vadodara" },
  openGraph: {
    title: "Access control maintenance in Vadodara | VadodaraExperts",
    description: "Professional access control maintenance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/facility-management-services/access-control-maintenance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="access-control-maintenance-vadodara" />;
}
