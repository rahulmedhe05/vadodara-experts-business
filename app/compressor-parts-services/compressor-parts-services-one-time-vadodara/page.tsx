import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("compressor-parts-services")!;

export const metadata: Metadata = {
  title: "Compressor Parts Services One Time in Vadodara | Compressor Parts Services | VadodaraExperts",
  description: "Professional compressor parts services one time services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/compressor-parts-services/compressor-parts-services-one-time-vadodara" },
  openGraph: {
    title: "Compressor Parts Services One Time in Vadodara | VadodaraExperts",
    description: "Professional compressor parts services one time services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/compressor-parts-services/compressor-parts-services-one-time-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="compressor-parts-services-one-time-vadodara" />;
}
