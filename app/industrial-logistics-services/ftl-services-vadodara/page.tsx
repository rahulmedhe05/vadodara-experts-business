import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-logistics-services")!;

export const metadata: Metadata = {
  title: "FTL services in Vadodara | Industrial Logistics Services | VadodaraExperts",
  description: "Professional ftl services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-logistics-services/ftl-services-vadodara" },
  openGraph: {
    title: "FTL services in Vadodara | VadodaraExperts",
    description: "Professional ftl services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-logistics-services/ftl-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ftl-services-vadodara" />;
}
