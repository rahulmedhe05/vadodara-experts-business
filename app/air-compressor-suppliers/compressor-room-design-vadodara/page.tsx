import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("air-compressor-suppliers")!;

export const metadata: Metadata = {
  title: "compressor room design in Vadodara | Air Compressor Suppliers | VadodaraExperts",
  description: "Professional compressor room design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/air-compressor-suppliers/compressor-room-design-vadodara" },
  openGraph: {
    title: "compressor room design in Vadodara | VadodaraExperts",
    description: "Professional compressor room design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/air-compressor-suppliers/compressor-room-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="compressor-room-design-vadodara" />;
}
