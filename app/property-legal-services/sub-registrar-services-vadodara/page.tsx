import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Sub registrar services in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional sub registrar services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/sub-registrar-services-vadodara" },
  openGraph: {
    title: "Sub registrar services in Vadodara | VadodaraExperts",
    description: "Professional sub registrar services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/sub-registrar-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sub-registrar-services-vadodara" />;
}
