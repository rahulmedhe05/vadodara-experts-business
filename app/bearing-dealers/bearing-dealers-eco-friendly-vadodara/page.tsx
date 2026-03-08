import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("bearing-dealers")!;

export const metadata: Metadata = {
  title: "Bearing Dealers Eco Friendly in Vadodara | Bearing Dealers | VadodaraExperts",
  description: "Professional bearing dealers eco friendly services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/bearing-dealers/bearing-dealers-eco-friendly-vadodara" },
  openGraph: {
    title: "Bearing Dealers Eco Friendly in Vadodara | VadodaraExperts",
    description: "Professional bearing dealers eco friendly services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/bearing-dealers/bearing-dealers-eco-friendly-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bearing-dealers-eco-friendly-vadodara" />;
}
