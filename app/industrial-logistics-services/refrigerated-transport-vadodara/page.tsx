import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-logistics-services")!;

export const metadata: Metadata = {
  title: "refrigerated transport in Vadodara | Industrial Logistics Services | VadodaraExperts",
  description: "Professional refrigerated transport services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-logistics-services/refrigerated-transport-vadodara" },
  openGraph: {
    title: "refrigerated transport in Vadodara | VadodaraExperts",
    description: "Professional refrigerated transport services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-logistics-services/refrigerated-transport-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="refrigerated-transport-vadodara" />;
}
