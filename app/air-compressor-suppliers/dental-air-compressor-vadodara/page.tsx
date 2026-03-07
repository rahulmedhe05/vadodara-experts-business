import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("air-compressor-suppliers")!;

export const metadata: Metadata = {
  title: "dental air compressor in Vadodara | Air Compressor Suppliers | VadodaraExperts",
  description: "Professional dental air compressor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/air-compressor-suppliers/dental-air-compressor-vadodara" },
  openGraph: {
    title: "dental air compressor in Vadodara | VadodaraExperts",
    description: "Professional dental air compressor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/air-compressor-suppliers/dental-air-compressor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dental-air-compressor-vadodara" />;
}
