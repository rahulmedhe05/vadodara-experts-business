import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Death certificate property transfer in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional death certificate property transfer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/death-certificate-property-transfer-vadodara" },
  openGraph: {
    title: "Death certificate property transfer in Vadodara | VadodaraExperts",
    description: "Professional death certificate property transfer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/death-certificate-property-transfer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="death-certificate-property-transfer-vadodara" />;
}
