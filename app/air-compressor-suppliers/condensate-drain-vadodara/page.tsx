import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("air-compressor-suppliers")!;

export const metadata: Metadata = {
  title: "condensate drain in Vadodara | Air Compressor Suppliers | VadodaraExperts",
  description: "Professional condensate drain services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/air-compressor-suppliers/condensate-drain-vadodara" },
  openGraph: {
    title: "condensate drain in Vadodara | VadodaraExperts",
    description: "Professional condensate drain services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/air-compressor-suppliers/condensate-drain-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="condensate-drain-vadodara" />;
}
