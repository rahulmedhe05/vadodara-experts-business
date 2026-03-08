import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-pump-services")!;

export const metadata: Metadata = {
  title: "Pump service in Vadodara | Water Pump Services | VadodaraExperts",
  description: "Professional pump service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-pump-services/pump-service-vadodara" },
  openGraph: {
    title: "Pump service in Vadodara | VadodaraExperts",
    description: "Professional pump service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-pump-services/pump-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pump-service-vadodara" />;
}
