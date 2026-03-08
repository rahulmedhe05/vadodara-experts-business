import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("air-compressor-suppliers")!;

export const metadata: Metadata = {
  title: "compressed air piping in Vadodara | Air Compressor Suppliers | VadodaraExperts",
  description: "Professional compressed air piping services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/air-compressor-suppliers/compressed-air-piping-vadodara" },
  openGraph: {
    title: "compressed air piping in Vadodara | VadodaraExperts",
    description: "Professional compressed air piping services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/air-compressor-suppliers/compressed-air-piping-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="compressed-air-piping-vadodara" />;
}
