import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-generator-suppliers")!;

export const metadata: Metadata = {
  title: "industrial generator price in Vadodara | Industrial Generator Suppliers | VadodaraExperts",
  description: "Professional industrial generator price services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-generator-suppliers/industrial-generator-price-vadodara" },
  openGraph: {
    title: "industrial generator price in Vadodara | VadodaraExperts",
    description: "Professional industrial generator price services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-generator-suppliers/industrial-generator-price-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-generator-price-vadodara" />;
}
