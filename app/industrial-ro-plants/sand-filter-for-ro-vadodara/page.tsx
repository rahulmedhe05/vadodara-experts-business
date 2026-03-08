import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-ro-plants")!;

export const metadata: Metadata = {
  title: "sand filter for RO in Vadodara | Industrial RO Plants | VadodaraExperts",
  description: "Professional sand filter for ro services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-ro-plants/sand-filter-for-ro-vadodara" },
  openGraph: {
    title: "sand filter for RO in Vadodara | VadodaraExperts",
    description: "Professional sand filter for ro services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-ro-plants/sand-filter-for-ro-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sand-filter-for-ro-vadodara" />;
}
