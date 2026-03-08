import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("bearing-dealers")!;

export const metadata: Metadata = {
  title: "Bearing Dealers Supplier in Vadodara | Bearing Dealers | VadodaraExperts",
  description: "Professional bearing dealers supplier services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/bearing-dealers/bearing-dealers-supplier-vadodara" },
  openGraph: {
    title: "Bearing Dealers Supplier in Vadodara | VadodaraExperts",
    description: "Professional bearing dealers supplier services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/bearing-dealers/bearing-dealers-supplier-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bearing-dealers-supplier-vadodara" />;
}
