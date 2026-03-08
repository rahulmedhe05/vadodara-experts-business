import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("compressor-parts-services")!;

export const metadata: Metadata = {
  title: "Compressor Parts Services in Vadodara | VadodaraExperts",
  description: "Find the best compressor parts services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/compressor-parts-services" },
  openGraph: {
    title: "Compressor Parts Services in Vadodara | VadodaraExperts",
    description: "Find the best compressor parts services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/compressor-parts-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
