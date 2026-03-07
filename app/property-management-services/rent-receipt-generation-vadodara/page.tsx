import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-management-services")!;

export const metadata: Metadata = {
  title: "Rent receipt generation in Vadodara | Property Management Services | VadodaraExperts",
  description: "Professional rent receipt generation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-management-services/rent-receipt-generation-vadodara" },
  openGraph: {
    title: "Rent receipt generation in Vadodara | VadodaraExperts",
    description: "Professional rent receipt generation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-management-services/rent-receipt-generation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rent-receipt-generation-vadodara" />;
}
