import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("loan-consultancy-services")!;

export const metadata: Metadata = {
  title: "Real estate project finance in Vadodara | Loan Consultancy Services | VadodaraExperts",
  description: "Professional real estate project finance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/loan-consultancy-services/real-estate-project-finance-vadodara" },
  openGraph: {
    title: "Real estate project finance in Vadodara | VadodaraExperts",
    description: "Professional real estate project finance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/loan-consultancy-services/real-estate-project-finance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="real-estate-project-finance-vadodara" />;
}
