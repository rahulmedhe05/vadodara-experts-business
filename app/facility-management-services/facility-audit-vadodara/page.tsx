import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("facility-management-services")!;

export const metadata: Metadata = {
  title: "Facility audit in Vadodara | Facility Management Services | VadodaraExperts",
  description: "Professional facility audit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/facility-management-services/facility-audit-vadodara" },
  openGraph: {
    title: "Facility audit in Vadodara | VadodaraExperts",
    description: "Professional facility audit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/facility-management-services/facility-audit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="facility-audit-vadodara" />;
}
