import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("legal-services")!;

export const metadata: Metadata = {
  title: "Property transfer lawyer in Vadodara | Legal Services | VadodaraExperts",
  description: "Professional property transfer lawyer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/legal-services/property-transfer-lawyer-vadodara" },
  openGraph: {
    title: "Property transfer lawyer in Vadodara | VadodaraExperts",
    description: "Professional property transfer lawyer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/legal-services/property-transfer-lawyer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-transfer-lawyer-vadodara" />;
}
