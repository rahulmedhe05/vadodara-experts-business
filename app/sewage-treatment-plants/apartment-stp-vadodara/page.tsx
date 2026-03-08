import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sewage-treatment-plants")!;

export const metadata: Metadata = {
  title: "apartment STP in Vadodara | Sewage Treatment Plants | VadodaraExperts",
  description: "Professional apartment stp services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sewage-treatment-plants/apartment-stp-vadodara" },
  openGraph: {
    title: "apartment STP in Vadodara | VadodaraExperts",
    description: "Professional apartment stp services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sewage-treatment-plants/apartment-stp-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="apartment-stp-vadodara" />;
}
