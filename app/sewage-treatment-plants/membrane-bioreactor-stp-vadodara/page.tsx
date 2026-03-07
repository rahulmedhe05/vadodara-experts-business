import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sewage-treatment-plants")!;

export const metadata: Metadata = {
  title: "membrane bioreactor STP in Vadodara | Sewage Treatment Plants | VadodaraExperts",
  description: "Professional membrane bioreactor stp services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sewage-treatment-plants/membrane-bioreactor-stp-vadodara" },
  openGraph: {
    title: "membrane bioreactor STP in Vadodara | VadodaraExperts",
    description: "Professional membrane bioreactor stp services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sewage-treatment-plants/membrane-bioreactor-stp-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="membrane-bioreactor-stp-vadodara" />;
}
