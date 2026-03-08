import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-ro-plants")!;

export const metadata: Metadata = {
  title: "reverse osmosis system in Vadodara | Industrial RO Plants | VadodaraExperts",
  description: "Professional reverse osmosis system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-ro-plants/reverse-osmosis-system-vadodara" },
  openGraph: {
    title: "reverse osmosis system in Vadodara | VadodaraExperts",
    description: "Professional reverse osmosis system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-ro-plants/reverse-osmosis-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="reverse-osmosis-system-vadodara" />;
}
