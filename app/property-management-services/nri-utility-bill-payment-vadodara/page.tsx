import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-management-services")!;

export const metadata: Metadata = {
  title: "NRI utility bill payment in Vadodara | Property Management Services | VadodaraExperts",
  description: "Professional nri utility bill payment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-management-services/nri-utility-bill-payment-vadodara" },
  openGraph: {
    title: "NRI utility bill payment in Vadodara | VadodaraExperts",
    description: "Professional nri utility bill payment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-management-services/nri-utility-bill-payment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="nri-utility-bill-payment-vadodara" />;
}
