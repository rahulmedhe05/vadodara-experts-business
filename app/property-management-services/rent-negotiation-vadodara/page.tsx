import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-management-services")!;

export const metadata: Metadata = {
  title: "Rent negotiation in Vadodara | Property Management Services | VadodaraExperts",
  description: "Professional rent negotiation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-management-services/rent-negotiation-vadodara" },
  openGraph: {
    title: "Rent negotiation in Vadodara | VadodaraExperts",
    description: "Professional rent negotiation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-management-services/rent-negotiation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rent-negotiation-vadodara" />;
}
