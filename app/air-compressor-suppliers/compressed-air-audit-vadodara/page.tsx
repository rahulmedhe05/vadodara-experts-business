import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("air-compressor-suppliers")!;

export const metadata: Metadata = {
  title: "compressed air audit in Vadodara | Air Compressor Suppliers | VadodaraExperts",
  description: "Professional compressed air audit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/air-compressor-suppliers/compressed-air-audit-vadodara" },
  openGraph: {
    title: "compressed air audit in Vadodara | VadodaraExperts",
    description: "Professional compressed air audit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/air-compressor-suppliers/compressed-air-audit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="compressed-air-audit-vadodara" />;
}
