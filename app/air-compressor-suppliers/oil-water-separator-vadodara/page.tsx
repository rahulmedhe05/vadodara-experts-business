import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("air-compressor-suppliers")!;

export const metadata: Metadata = {
  title: "oil water separator in Vadodara | Air Compressor Suppliers | VadodaraExperts",
  description: "Professional oil water separator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/air-compressor-suppliers/oil-water-separator-vadodara" },
  openGraph: {
    title: "oil water separator in Vadodara | VadodaraExperts",
    description: "Professional oil water separator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/air-compressor-suppliers/oil-water-separator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="oil-water-separator-vadodara" />;
}
