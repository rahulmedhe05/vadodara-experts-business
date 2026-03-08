import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-logistics-services")!;

export const metadata: Metadata = {
  title: "logistics services in Vadodara | Industrial Logistics Services | VadodaraExperts",
  description: "Professional logistics services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-logistics-services/logistics-services-vadodara" },
  openGraph: {
    title: "logistics services in Vadodara | VadodaraExperts",
    description: "Professional logistics services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-logistics-services/logistics-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="logistics-services-vadodara" />;
}
