import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-management-services")!;

export const metadata: Metadata = {
  title: "Tenant screening in Vadodara | Property Management Services | VadodaraExperts",
  description: "Professional tenant screening services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-management-services/tenant-screening-vadodara" },
  openGraph: {
    title: "Tenant screening in Vadodara | VadodaraExperts",
    description: "Professional tenant screening services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-management-services/tenant-screening-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tenant-screening-vadodara" />;
}
