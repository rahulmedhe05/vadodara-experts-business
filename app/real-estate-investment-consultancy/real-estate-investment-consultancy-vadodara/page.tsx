import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-investment-consultancy")!;

export const metadata: Metadata = {
  title: "real estate investment consultancy in Vadodara | Real Estate Investment Consultancy | VadodaraExperts",
  description: "Professional real estate investment consultancy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-investment-consultancy/real-estate-investment-consultancy-vadodara" },
  openGraph: {
    title: "real estate investment consultancy in Vadodara | VadodaraExperts",
    description: "Professional real estate investment consultancy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-investment-consultancy/real-estate-investment-consultancy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="real-estate-investment-consultancy-vadodara" />;
}
