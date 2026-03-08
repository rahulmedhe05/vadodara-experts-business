import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "Shipment tracking in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional shipment tracking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/shipment-tracking-vadodara" },
  openGraph: {
    title: "Shipment tracking in Vadodara | VadodaraExperts",
    description: "Professional shipment tracking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/shipment-tracking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="shipment-tracking-vadodara" />;
}
