import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-property-brokers")!;

export const metadata: Metadata = {
  title: "Gorwa GIDC property in Vadodara | Industrial Property Brokers | VadodaraExperts",
  description: "Professional gorwa gidc property services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-property-brokers/gorwa-gidc-property-vadodara" },
  openGraph: {
    title: "Gorwa GIDC property in Vadodara | VadodaraExperts",
    description: "Professional gorwa gidc property services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-property-brokers/gorwa-gidc-property-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gorwa-gidc-property-vadodara" />;
}
