import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sewage-treatment-plants")!;

export const metadata: Metadata = {
  title: "STP for gardening water in Vadodara | Sewage Treatment Plants | VadodaraExperts",
  description: "Professional stp for gardening water services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sewage-treatment-plants/stp-for-gardening-water-vadodara" },
  openGraph: {
    title: "STP for gardening water in Vadodara | VadodaraExperts",
    description: "Professional stp for gardening water services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sewage-treatment-plants/stp-for-gardening-water-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="stp-for-gardening-water-vadodara" />;
}
