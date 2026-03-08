import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("air-compressor-suppliers")!;

export const metadata: Metadata = {
  title: "Air Compressor Suppliers in Vadodara | VadodaraExperts",
  description: "Find the best air compressor suppliers in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/air-compressor-suppliers" },
  openGraph: {
    title: "Air Compressor Suppliers in Vadodara | VadodaraExperts",
    description: "Find the best air compressor suppliers in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/air-compressor-suppliers",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
