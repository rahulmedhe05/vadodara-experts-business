import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("facility-management-services")!;

export const metadata: Metadata = {
  title: "Gated community management in Vadodara | Facility Management Services | VadodaraExperts",
  description: "Professional gated community management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/facility-management-services/gated-community-management-vadodara" },
  openGraph: {
    title: "Gated community management in Vadodara | VadodaraExperts",
    description: "Professional gated community management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/facility-management-services/gated-community-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gated-community-management-vadodara" />;
}
