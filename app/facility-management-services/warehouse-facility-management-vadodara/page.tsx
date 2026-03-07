import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("facility-management-services")!;

export const metadata: Metadata = {
  title: "Warehouse facility management in Vadodara | Facility Management Services | VadodaraExperts",
  description: "Professional warehouse facility management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/facility-management-services/warehouse-facility-management-vadodara" },
  openGraph: {
    title: "Warehouse facility management in Vadodara | VadodaraExperts",
    description: "Professional warehouse facility management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/facility-management-services/warehouse-facility-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="warehouse-facility-management-vadodara" />;
}
