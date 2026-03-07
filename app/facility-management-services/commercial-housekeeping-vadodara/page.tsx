import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("facility-management-services")!;

export const metadata: Metadata = {
  title: "Commercial housekeeping in Vadodara | Facility Management Services | VadodaraExperts",
  description: "Professional commercial housekeeping services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/facility-management-services/commercial-housekeeping-vadodara" },
  openGraph: {
    title: "Commercial housekeeping in Vadodara | VadodaraExperts",
    description: "Professional commercial housekeeping services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/facility-management-services/commercial-housekeeping-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="commercial-housekeeping-vadodara" />;
}
