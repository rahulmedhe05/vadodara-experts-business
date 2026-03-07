import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("air-compressor-suppliers")!;

export const metadata: Metadata = {
  title: "compressed air energy saving in Vadodara | Air Compressor Suppliers | VadodaraExperts",
  description: "Professional compressed air energy saving services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/air-compressor-suppliers/compressed-air-energy-saving-vadodara" },
  openGraph: {
    title: "compressed air energy saving in Vadodara | VadodaraExperts",
    description: "Professional compressed air energy saving services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/air-compressor-suppliers/compressed-air-energy-saving-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="compressed-air-energy-saving-vadodara" />;
}
