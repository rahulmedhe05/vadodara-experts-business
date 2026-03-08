import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("facility-management-services")!;

export const metadata: Metadata = {
  title: "Mall housekeeping in Vadodara | Facility Management Services | VadodaraExperts",
  description: "Professional mall housekeeping services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/facility-management-services/mall-housekeeping-vadodara" },
  openGraph: {
    title: "Mall housekeeping in Vadodara | VadodaraExperts",
    description: "Professional mall housekeeping services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/facility-management-services/mall-housekeeping-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mall-housekeeping-vadodara" />;
}
