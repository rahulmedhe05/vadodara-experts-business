import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-logistics-services")!;

export const metadata: Metadata = {
  title: "first mile pickup in Vadodara | Industrial Logistics Services | VadodaraExperts",
  description: "Professional first mile pickup services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-logistics-services/first-mile-pickup-vadodara" },
  openGraph: {
    title: "first mile pickup in Vadodara | VadodaraExperts",
    description: "Professional first mile pickup services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-logistics-services/first-mile-pickup-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="first-mile-pickup-vadodara" />;
}
