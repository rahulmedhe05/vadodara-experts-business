import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-logistics-services")!;

export const metadata: Metadata = {
  title: "rail container transport in Vadodara | Industrial Logistics Services | VadodaraExperts",
  description: "Professional rail container transport services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-logistics-services/rail-container-transport-vadodara" },
  openGraph: {
    title: "rail container transport in Vadodara | VadodaraExperts",
    description: "Professional rail container transport services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-logistics-services/rail-container-transport-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rail-container-transport-vadodara" />;
}
