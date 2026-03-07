import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("facility-management-services")!;

export const metadata: Metadata = {
  title: "Water management in Vadodara | Facility Management Services | VadodaraExperts",
  description: "Professional water management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/facility-management-services/water-management-vadodara" },
  openGraph: {
    title: "Water management in Vadodara | VadodaraExperts",
    description: "Professional water management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/facility-management-services/water-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-management-vadodara" />;
}
