import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-logistics-services")!;

export const metadata: Metadata = {
  title: "20 feet container transport in Vadodara | Industrial Logistics Services | VadodaraExperts",
  description: "Professional 20 feet container transport services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-logistics-services/20-feet-container-transport-vadodara" },
  openGraph: {
    title: "20 feet container transport in Vadodara | VadodaraExperts",
    description: "Professional 20 feet container transport services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-logistics-services/20-feet-container-transport-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="20-feet-container-transport-vadodara" />;
}
