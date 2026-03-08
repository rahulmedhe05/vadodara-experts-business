import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("facility-management-services")!;

export const metadata: Metadata = {
  title: "Flooring maintenance in Vadodara | Facility Management Services | VadodaraExperts",
  description: "Professional flooring maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/facility-management-services/flooring-maintenance-vadodara" },
  openGraph: {
    title: "Flooring maintenance in Vadodara | VadodaraExperts",
    description: "Professional flooring maintenance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/facility-management-services/flooring-maintenance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="flooring-maintenance-vadodara" />;
}
