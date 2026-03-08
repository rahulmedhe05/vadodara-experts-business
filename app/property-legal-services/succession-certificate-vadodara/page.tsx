import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Succession certificate in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional succession certificate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/succession-certificate-vadodara" },
  openGraph: {
    title: "Succession certificate in Vadodara | VadodaraExperts",
    description: "Professional succession certificate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/succession-certificate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="succession-certificate-vadodara" />;
}
