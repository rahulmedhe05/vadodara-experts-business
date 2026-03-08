import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-ro-plants")!;

export const metadata: Metadata = {
  title: "industrial reverse osmosis in Vadodara | Industrial RO Plants | VadodaraExperts",
  description: "Professional industrial reverse osmosis services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-ro-plants/industrial-reverse-osmosis-vadodara" },
  openGraph: {
    title: "industrial reverse osmosis in Vadodara | VadodaraExperts",
    description: "Professional industrial reverse osmosis services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-ro-plants/industrial-reverse-osmosis-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-reverse-osmosis-vadodara" />;
}
