import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("loan-consultancy-services")!;

export const metadata: Metadata = {
  title: "LIC Housing Finance in Vadodara | Loan Consultancy Services | VadodaraExperts",
  description: "Professional lic housing finance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/loan-consultancy-services/lic-housing-finance-vadodara" },
  openGraph: {
    title: "LIC Housing Finance in Vadodara | VadodaraExperts",
    description: "Professional lic housing finance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/loan-consultancy-services/lic-housing-finance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lic-housing-finance-vadodara" />;
}
