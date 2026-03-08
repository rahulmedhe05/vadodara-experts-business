import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("geyser-services")!;

export const metadata: Metadata = {
  title: "Hotel water heater service in Vadodara | Geyser Services | VadodaraExperts",
  description: "Professional hotel water heater service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/geyser-services/hotel-water-heater-service-vadodara" },
  openGraph: {
    title: "Hotel water heater service in Vadodara | VadodaraExperts",
    description: "Professional hotel water heater service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/geyser-services/hotel-water-heater-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hotel-water-heater-service-vadodara" />;
}
