import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-management-services")!;

export const metadata: Metadata = {
  title: "Tenant communication in Vadodara | Property Management Services | VadodaraExperts",
  description: "Professional tenant communication services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-management-services/tenant-communication-vadodara" },
  openGraph: {
    title: "Tenant communication in Vadodara | VadodaraExperts",
    description: "Professional tenant communication services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-management-services/tenant-communication-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tenant-communication-vadodara" />;
}
