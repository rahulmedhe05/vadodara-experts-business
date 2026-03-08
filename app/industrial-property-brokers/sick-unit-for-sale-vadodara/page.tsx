import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-property-brokers")!;

export const metadata: Metadata = {
  title: "sick unit for sale in Vadodara | Industrial Property Brokers | VadodaraExperts",
  description: "Professional sick unit for sale services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-property-brokers/sick-unit-for-sale-vadodara" },
  openGraph: {
    title: "sick unit for sale in Vadodara | VadodaraExperts",
    description: "Professional sick unit for sale services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-property-brokers/sick-unit-for-sale-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sick-unit-for-sale-vadodara" />;
}
