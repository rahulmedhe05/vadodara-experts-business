import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("compressor-parts-services")!;

export const metadata: Metadata = {
  title: "Trusted Compressor Parts Services in Vadodara | Compressor Parts Services | VadodaraExperts",
  description: "Professional trusted compressor parts services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/compressor-parts-services/trusted-compressor-parts-services-vadodara" },
  openGraph: {
    title: "Trusted Compressor Parts Services in Vadodara | VadodaraExperts",
    description: "Professional trusted compressor parts services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/compressor-parts-services/trusted-compressor-parts-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="trusted-compressor-parts-services-vadodara" />;
}
