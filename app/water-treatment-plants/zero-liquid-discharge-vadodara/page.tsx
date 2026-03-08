import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-treatment-plants")!;

export const metadata: Metadata = {
  title: "zero liquid discharge in Vadodara | Water Treatment Plants | VadodaraExperts",
  description: "Professional zero liquid discharge services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-treatment-plants/zero-liquid-discharge-vadodara" },
  openGraph: {
    title: "zero liquid discharge in Vadodara | VadodaraExperts",
    description: "Professional zero liquid discharge services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-treatment-plants/zero-liquid-discharge-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="zero-liquid-discharge-vadodara" />;
}
