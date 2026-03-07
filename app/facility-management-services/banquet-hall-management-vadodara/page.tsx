import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("facility-management-services")!;

export const metadata: Metadata = {
  title: "Banquet hall management in Vadodara | Facility Management Services | VadodaraExperts",
  description: "Professional banquet hall management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/facility-management-services/banquet-hall-management-vadodara" },
  openGraph: {
    title: "Banquet hall management in Vadodara | VadodaraExperts",
    description: "Professional banquet hall management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/facility-management-services/banquet-hall-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="banquet-hall-management-vadodara" />;
}
