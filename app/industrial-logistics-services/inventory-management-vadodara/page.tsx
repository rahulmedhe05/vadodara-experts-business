import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-logistics-services")!;

export const metadata: Metadata = {
  title: "inventory management in Vadodara | Industrial Logistics Services | VadodaraExperts",
  description: "Professional inventory management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-logistics-services/inventory-management-vadodara" },
  openGraph: {
    title: "inventory management in Vadodara | VadodaraExperts",
    description: "Professional inventory management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-logistics-services/inventory-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="inventory-management-vadodara" />;
}
