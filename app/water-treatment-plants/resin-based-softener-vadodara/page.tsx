import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-treatment-plants")!;

export const metadata: Metadata = {
  title: "resin based softener in Vadodara | Water Treatment Plants | VadodaraExperts",
  description: "Professional resin based softener services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-treatment-plants/resin-based-softener-vadodara" },
  openGraph: {
    title: "resin based softener in Vadodara | VadodaraExperts",
    description: "Professional resin based softener services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-treatment-plants/resin-based-softener-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="resin-based-softener-vadodara" />;
}
