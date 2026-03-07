import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-logistics-services")!;

export const metadata: Metadata = {
  title: "order fulfilment in Vadodara | Industrial Logistics Services | VadodaraExperts",
  description: "Professional order fulfilment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-logistics-services/order-fulfilment-vadodara" },
  openGraph: {
    title: "order fulfilment in Vadodara | VadodaraExperts",
    description: "Professional order fulfilment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-logistics-services/order-fulfilment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="order-fulfilment-vadodara" />;
}
