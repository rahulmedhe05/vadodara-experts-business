import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-investment-consultancy")!;

export const metadata: Metadata = {
  title: "area wise property rates in Vadodara | Real Estate Investment Consultancy | VadodaraExperts",
  description: "Professional area wise property rates services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-investment-consultancy/area-wise-property-rates-vadodara" },
  openGraph: {
    title: "area wise property rates in Vadodara | VadodaraExperts",
    description: "Professional area wise property rates services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-investment-consultancy/area-wise-property-rates-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="area-wise-property-rates-vadodara" />;
}
