import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("air-compressor-suppliers")!;

export const metadata: Metadata = {
  title: "30 HP compressor in Vadodara | Air Compressor Suppliers | VadodaraExperts",
  description: "Professional 30 hp compressor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/air-compressor-suppliers/30-hp-compressor-vadodara" },
  openGraph: {
    title: "30 HP compressor in Vadodara | VadodaraExperts",
    description: "Professional 30 hp compressor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/air-compressor-suppliers/30-hp-compressor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="30-hp-compressor-vadodara" />;
}
