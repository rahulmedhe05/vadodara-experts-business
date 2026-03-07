import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-investment-consultancy")!;

export const metadata: Metadata = {
  title: "upcoming area property in Vadodara | Real Estate Investment Consultancy | VadodaraExperts",
  description: "Professional upcoming area property services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-investment-consultancy/upcoming-area-property-vadodara" },
  openGraph: {
    title: "upcoming area property in Vadodara | VadodaraExperts",
    description: "Professional upcoming area property services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-investment-consultancy/upcoming-area-property-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="upcoming-area-property-vadodara" />;
}
