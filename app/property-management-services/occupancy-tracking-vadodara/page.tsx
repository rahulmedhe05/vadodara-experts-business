import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-management-services")!;

export const metadata: Metadata = {
  title: "Occupancy tracking in Vadodara | Property Management Services | VadodaraExperts",
  description: "Professional occupancy tracking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-management-services/occupancy-tracking-vadodara" },
  openGraph: {
    title: "Occupancy tracking in Vadodara | VadodaraExperts",
    description: "Professional occupancy tracking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-management-services/occupancy-tracking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="occupancy-tracking-vadodara" />;
}
