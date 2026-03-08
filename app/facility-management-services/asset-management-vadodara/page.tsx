import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("facility-management-services")!;

export const metadata: Metadata = {
  title: "Asset management in Vadodara | Facility Management Services | VadodaraExperts",
  description: "Professional asset management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/facility-management-services/asset-management-vadodara" },
  openGraph: {
    title: "Asset management in Vadodara | VadodaraExperts",
    description: "Professional asset management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/facility-management-services/asset-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="asset-management-vadodara" />;
}
