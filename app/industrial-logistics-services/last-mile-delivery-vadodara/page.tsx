import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-logistics-services")!;

export const metadata: Metadata = {
  title: "last mile delivery in Vadodara | Industrial Logistics Services | VadodaraExperts",
  description: "Professional last mile delivery services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-logistics-services/last-mile-delivery-vadodara" },
  openGraph: {
    title: "last mile delivery in Vadodara | VadodaraExperts",
    description: "Professional last mile delivery services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-logistics-services/last-mile-delivery-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="last-mile-delivery-vadodara" />;
}
