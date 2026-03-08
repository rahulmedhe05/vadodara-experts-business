import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-pump-services")!;

export const metadata: Metadata = {
  title: "Grundfos pump service in Vadodara | Water Pump Services | VadodaraExperts",
  description: "Professional grundfos pump service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-pump-services/grundfos-pump-service-vadodara" },
  openGraph: {
    title: "Grundfos pump service in Vadodara | VadodaraExperts",
    description: "Professional grundfos pump service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-pump-services/grundfos-pump-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="grundfos-pump-service-vadodara" />;
}
