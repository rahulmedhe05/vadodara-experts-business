import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-management-services")!;

export const metadata: Metadata = {
  title: "Tenant move out inspection in Vadodara | Property Management Services | VadodaraExperts",
  description: "Professional tenant move out inspection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-management-services/tenant-move-out-inspection-vadodara" },
  openGraph: {
    title: "Tenant move out inspection in Vadodara | VadodaraExperts",
    description: "Professional tenant move out inspection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-management-services/tenant-move-out-inspection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tenant-move-out-inspection-vadodara" />;
}
