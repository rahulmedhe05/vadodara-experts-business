import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-investment-consultancy")!;

export const metadata: Metadata = {
  title: "property loan assistance in Vadodara | Real Estate Investment Consultancy | VadodaraExperts",
  description: "Professional property loan assistance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-investment-consultancy/property-loan-assistance-vadodara" },
  openGraph: {
    title: "property loan assistance in Vadodara | VadodaraExperts",
    description: "Professional property loan assistance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-investment-consultancy/property-loan-assistance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-loan-assistance-vadodara" />;
}
