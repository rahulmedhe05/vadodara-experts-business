import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-investment-consultancy")!;

export const metadata: Metadata = {
  title: "property portfolio management in Vadodara | Real Estate Investment Consultancy | VadodaraExperts",
  description: "Professional property portfolio management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-investment-consultancy/property-portfolio-management-vadodara" },
  openGraph: {
    title: "property portfolio management in Vadodara | VadodaraExperts",
    description: "Professional property portfolio management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-investment-consultancy/property-portfolio-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-portfolio-management-vadodara" />;
}
