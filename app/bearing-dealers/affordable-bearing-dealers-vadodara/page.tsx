import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("bearing-dealers")!;

export const metadata: Metadata = {
  title: "Affordable Bearing Dealers in Vadodara | Bearing Dealers | VadodaraExperts",
  description: "Professional affordable bearing dealers services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/bearing-dealers/affordable-bearing-dealers-vadodara" },
  openGraph: {
    title: "Affordable Bearing Dealers in Vadodara | VadodaraExperts",
    description: "Professional affordable bearing dealers services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/bearing-dealers/affordable-bearing-dealers-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="affordable-bearing-dealers-vadodara" />;
}
