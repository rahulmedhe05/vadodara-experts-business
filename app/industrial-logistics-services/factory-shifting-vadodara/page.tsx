import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-logistics-services")!;

export const metadata: Metadata = {
  title: "factory shifting in Vadodara | Industrial Logistics Services | VadodaraExperts",
  description: "Professional factory shifting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-logistics-services/factory-shifting-vadodara" },
  openGraph: {
    title: "factory shifting in Vadodara | VadodaraExperts",
    description: "Professional factory shifting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-logistics-services/factory-shifting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-shifting-vadodara" />;
}
