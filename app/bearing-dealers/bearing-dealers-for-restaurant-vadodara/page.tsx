import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("bearing-dealers")!;

export const metadata: Metadata = {
  title: "Bearing Dealers For Restaurant in Vadodara | Bearing Dealers | VadodaraExperts",
  description: "Professional bearing dealers for restaurant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/bearing-dealers/bearing-dealers-for-restaurant-vadodara" },
  openGraph: {
    title: "Bearing Dealers For Restaurant in Vadodara | VadodaraExperts",
    description: "Professional bearing dealers for restaurant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/bearing-dealers/bearing-dealers-for-restaurant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bearing-dealers-for-restaurant-vadodara" />;
}
