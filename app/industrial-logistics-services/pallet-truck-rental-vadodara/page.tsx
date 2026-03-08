import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-logistics-services")!;

export const metadata: Metadata = {
  title: "pallet truck rental in Vadodara | Industrial Logistics Services | VadodaraExperts",
  description: "Professional pallet truck rental services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-logistics-services/pallet-truck-rental-vadodara" },
  openGraph: {
    title: "pallet truck rental in Vadodara | VadodaraExperts",
    description: "Professional pallet truck rental services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-logistics-services/pallet-truck-rental-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pallet-truck-rental-vadodara" />;
}
