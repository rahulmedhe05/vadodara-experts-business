import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-treatment-plants")!;

export const metadata: Metadata = {
  title: "water storage tank in Vadodara | Water Treatment Plants | VadodaraExperts",
  description: "Professional water storage tank services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-treatment-plants/water-storage-tank-vadodara" },
  openGraph: {
    title: "water storage tank in Vadodara | VadodaraExperts",
    description: "Professional water storage tank services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-treatment-plants/water-storage-tank-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-storage-tank-vadodara" />;
}
