import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("facility-management-services")!;

export const metadata: Metadata = {
  title: "Outsourced facility management in Vadodara | Facility Management Services | VadodaraExperts",
  description: "Professional outsourced facility management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/facility-management-services/outsourced-facility-management-vadodara" },
  openGraph: {
    title: "Outsourced facility management in Vadodara | VadodaraExperts",
    description: "Professional outsourced facility management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/facility-management-services/outsourced-facility-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="outsourced-facility-management-vadodara" />;
}
