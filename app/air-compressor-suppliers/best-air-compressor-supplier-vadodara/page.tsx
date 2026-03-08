import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("air-compressor-suppliers")!;

export const metadata: Metadata = {
  title: "best air compressor supplier in Vadodara | Air Compressor Suppliers | VadodaraExperts",
  description: "Professional best air compressor supplier services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/air-compressor-suppliers/best-air-compressor-supplier-vadodara" },
  openGraph: {
    title: "best air compressor supplier in Vadodara | VadodaraExperts",
    description: "Professional best air compressor supplier services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/air-compressor-suppliers/best-air-compressor-supplier-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-air-compressor-supplier-vadodara" />;
}
