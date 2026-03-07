import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sewage-treatment-plants")!;

export const metadata: Metadata = {
  title: "STP treated water quality in Vadodara | Sewage Treatment Plants | VadodaraExperts",
  description: "Professional stp treated water quality services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sewage-treatment-plants/stp-treated-water-quality-vadodara" },
  openGraph: {
    title: "STP treated water quality in Vadodara | VadodaraExperts",
    description: "Professional stp treated water quality services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sewage-treatment-plants/stp-treated-water-quality-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="stp-treated-water-quality-vadodara" />;
}
