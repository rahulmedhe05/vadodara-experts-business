import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Occupation certificate in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional occupation certificate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/occupation-certificate-vadodara" },
  openGraph: {
    title: "Occupation certificate in Vadodara | VadodaraExperts",
    description: "Professional occupation certificate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/occupation-certificate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="occupation-certificate-vadodara" />;
}
