import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-management-services")!;

export const metadata: Metadata = {
  title: "NRI property inspection in Vadodara | Property Management Services | VadodaraExperts",
  description: "Professional nri property inspection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-management-services/nri-property-inspection-vadodara" },
  openGraph: {
    title: "NRI property inspection in Vadodara | VadodaraExperts",
    description: "Professional nri property inspection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-management-services/nri-property-inspection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="nri-property-inspection-vadodara" />;
}
