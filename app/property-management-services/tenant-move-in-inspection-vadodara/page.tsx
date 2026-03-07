import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-management-services")!;

export const metadata: Metadata = {
  title: "Tenant move in inspection in Vadodara | Property Management Services | VadodaraExperts",
  description: "Professional tenant move in inspection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-management-services/tenant-move-in-inspection-vadodara" },
  openGraph: {
    title: "Tenant move in inspection in Vadodara | VadodaraExperts",
    description: "Professional tenant move in inspection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-management-services/tenant-move-in-inspection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tenant-move-in-inspection-vadodara" />;
}
