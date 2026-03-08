import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-management-services")!;

export const metadata: Metadata = {
  title: "Rent deposit management in Vadodara | Property Management Services | VadodaraExperts",
  description: "Professional rent deposit management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-management-services/rent-deposit-management-vadodara" },
  openGraph: {
    title: "Rent deposit management in Vadodara | VadodaraExperts",
    description: "Professional rent deposit management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-management-services/rent-deposit-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rent-deposit-management-vadodara" />;
}
