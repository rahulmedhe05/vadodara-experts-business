import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("compressor-parts-services")!;

export const metadata: Metadata = {
  title: "Top Compressor Parts Services in Vadodara | Compressor Parts Services | VadodaraExperts",
  description: "Professional top compressor parts services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/compressor-parts-services/top-compressor-parts-services-vadodara" },
  openGraph: {
    title: "Top Compressor Parts Services in Vadodara | VadodaraExperts",
    description: "Professional top compressor parts services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/compressor-parts-services/top-compressor-parts-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="top-compressor-parts-services-vadodara" />;
}
