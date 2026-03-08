import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("bearing-dealers")!;

export const metadata: Metadata = {
  title: "Bearing Dealers Agency in Vadodara | Bearing Dealers | VadodaraExperts",
  description: "Professional bearing dealers agency services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/bearing-dealers/bearing-dealers-agency-vadodara" },
  openGraph: {
    title: "Bearing Dealers Agency in Vadodara | VadodaraExperts",
    description: "Professional bearing dealers agency services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/bearing-dealers/bearing-dealers-agency-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bearing-dealers-agency-vadodara" />;
}
