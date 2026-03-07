import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-treatment-plants")!;

export const metadata: Metadata = {
  title: "aeration system in Vadodara | Water Treatment Plants | VadodaraExperts",
  description: "Professional aeration system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-treatment-plants/aeration-system-vadodara" },
  openGraph: {
    title: "aeration system in Vadodara | VadodaraExperts",
    description: "Professional aeration system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-treatment-plants/aeration-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="aeration-system-vadodara" />;
}
