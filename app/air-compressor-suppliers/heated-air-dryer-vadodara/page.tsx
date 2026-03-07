import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("air-compressor-suppliers")!;

export const metadata: Metadata = {
  title: "heated air dryer in Vadodara | Air Compressor Suppliers | VadodaraExperts",
  description: "Professional heated air dryer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/air-compressor-suppliers/heated-air-dryer-vadodara" },
  openGraph: {
    title: "heated air dryer in Vadodara | VadodaraExperts",
    description: "Professional heated air dryer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/air-compressor-suppliers/heated-air-dryer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="heated-air-dryer-vadodara" />;
}
