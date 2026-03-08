import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("bearing-dealers")!;

export const metadata: Metadata = {
  title: "Best Bearing Dealers in Vadodara | Bearing Dealers | VadodaraExperts",
  description: "Professional best bearing dealers services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/bearing-dealers/best-bearing-dealers-vadodara" },
  openGraph: {
    title: "Best Bearing Dealers in Vadodara | VadodaraExperts",
    description: "Professional best bearing dealers services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/bearing-dealers/best-bearing-dealers-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-bearing-dealers-vadodara" />;
}
