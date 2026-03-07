import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("borewell-drilling-services")!;

export const metadata: Metadata = {
  title: "Borewell compressor cleaning in Vadodara | Borewell Drilling Services | VadodaraExperts",
  description: "Professional borewell compressor cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/borewell-drilling-services/borewell-compressor-cleaning-vadodara" },
  openGraph: {
    title: "Borewell compressor cleaning in Vadodara | VadodaraExperts",
    description: "Professional borewell compressor cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/borewell-drilling-services/borewell-compressor-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="borewell-compressor-cleaning-vadodara" />;
}
