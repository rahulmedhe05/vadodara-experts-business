import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-logistics-services")!;

export const metadata: Metadata = {
  title: "forklift rental in Vadodara | Industrial Logistics Services | VadodaraExperts",
  description: "Professional forklift rental services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-logistics-services/forklift-rental-vadodara" },
  openGraph: {
    title: "forklift rental in Vadodara | VadodaraExperts",
    description: "Professional forklift rental services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-logistics-services/forklift-rental-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="forklift-rental-vadodara" />;
}
