import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "hot dip galvanizing in Vadodara | Steel Structure Construction | VadodaraExperts",
  description: "Professional hot dip galvanizing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction/hot-dip-galvanizing-vadodara" },
  openGraph: {
    title: "hot dip galvanizing in Vadodara | VadodaraExperts",
    description: "Professional hot dip galvanizing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-structure-construction/hot-dip-galvanizing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hot-dip-galvanizing-vadodara" />;
}
