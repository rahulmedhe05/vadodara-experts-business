import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-tank-cleaning")!;

export const metadata: Metadata = {
  title: "Scheduled tank cleaning in Vadodara | Water Tank Cleaning | VadodaraExperts",
  description: "Professional scheduled tank cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-tank-cleaning/scheduled-tank-cleaning-vadodara" },
  openGraph: {
    title: "Scheduled tank cleaning in Vadodara | VadodaraExperts",
    description: "Professional scheduled tank cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-tank-cleaning/scheduled-tank-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="scheduled-tank-cleaning-vadodara" />;
}
