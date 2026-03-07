import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-tank-cleaning")!;

export const metadata: Metadata = {
  title: "Storage tank cleaning industrial in Vadodara | Water Tank Cleaning | VadodaraExperts",
  description: "Professional storage tank cleaning industrial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-tank-cleaning/storage-tank-cleaning-industrial-vadodara" },
  openGraph: {
    title: "Storage tank cleaning industrial in Vadodara | VadodaraExperts",
    description: "Professional storage tank cleaning industrial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-tank-cleaning/storage-tank-cleaning-industrial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="storage-tank-cleaning-industrial-vadodara" />;
}
