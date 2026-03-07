import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mortgage-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Property loan in Vadodara | Mortgage Loan Consultancy | VadodaraExperts",
  description: "Professional property loan services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mortgage-loan-consultancy/property-loan-vadodara" },
  openGraph: {
    title: "Property loan in Vadodara | VadodaraExperts",
    description: "Professional property loan services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mortgage-loan-consultancy/property-loan-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-loan-vadodara" />;
}
