import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-investment-consultancy")!;

export const metadata: Metadata = {
  title: "capital gain tax property in Vadodara | Real Estate Investment Consultancy | VadodaraExperts",
  description: "Professional capital gain tax property services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-investment-consultancy/capital-gain-tax-property-vadodara" },
  openGraph: {
    title: "capital gain tax property in Vadodara | VadodaraExperts",
    description: "Professional capital gain tax property services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-investment-consultancy/capital-gain-tax-property-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="capital-gain-tax-property-vadodara" />;
}
