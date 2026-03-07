import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("air-compressor-suppliers")!;

export const metadata: Metadata = {
  title: "Gardner Denver compressor in Vadodara | Air Compressor Suppliers | VadodaraExperts",
  description: "Professional gardner denver compressor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/air-compressor-suppliers/gardner-denver-compressor-vadodara" },
  openGraph: {
    title: "Gardner Denver compressor in Vadodara | VadodaraExperts",
    description: "Professional gardner denver compressor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/air-compressor-suppliers/gardner-denver-compressor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gardner-denver-compressor-vadodara" />;
}
