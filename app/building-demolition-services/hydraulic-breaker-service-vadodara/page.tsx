import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-demolition-services")!;

export const metadata: Metadata = {
  title: "hydraulic breaker service in Vadodara | Building Demolition Services | VadodaraExperts",
  description: "Professional hydraulic breaker service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-demolition-services/hydraulic-breaker-service-vadodara" },
  openGraph: {
    title: "hydraulic breaker service in Vadodara | VadodaraExperts",
    description: "Professional hydraulic breaker service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-demolition-services/hydraulic-breaker-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hydraulic-breaker-service-vadodara" />;
}
