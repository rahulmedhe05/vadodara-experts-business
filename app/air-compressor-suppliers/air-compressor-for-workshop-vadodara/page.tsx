import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("air-compressor-suppliers")!;

export const metadata: Metadata = {
  title: "air compressor for workshop in Vadodara | Air Compressor Suppliers | VadodaraExperts",
  description: "Professional air compressor for workshop services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/air-compressor-suppliers/air-compressor-for-workshop-vadodara" },
  openGraph: {
    title: "air compressor for workshop in Vadodara | VadodaraExperts",
    description: "Professional air compressor for workshop services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/air-compressor-suppliers/air-compressor-for-workshop-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="air-compressor-for-workshop-vadodara" />;
}
