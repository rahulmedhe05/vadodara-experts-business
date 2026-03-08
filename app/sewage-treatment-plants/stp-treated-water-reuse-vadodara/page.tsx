import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sewage-treatment-plants")!;

export const metadata: Metadata = {
  title: "STP treated water reuse in Vadodara | Sewage Treatment Plants | VadodaraExperts",
  description: "Professional stp treated water reuse services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sewage-treatment-plants/stp-treated-water-reuse-vadodara" },
  openGraph: {
    title: "STP treated water reuse in Vadodara | VadodaraExperts",
    description: "Professional stp treated water reuse services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sewage-treatment-plants/stp-treated-water-reuse-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="stp-treated-water-reuse-vadodara" />;
}
