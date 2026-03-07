import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-logistics-services")!;

export const metadata: Metadata = {
  title: "3PL services in Vadodara | Industrial Logistics Services | VadodaraExperts",
  description: "Professional 3pl services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-logistics-services/3pl-services-vadodara" },
  openGraph: {
    title: "3PL services in Vadodara | VadodaraExperts",
    description: "Professional 3pl services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-logistics-services/3pl-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="3pl-services-vadodara" />;
}
