import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("loan-consultancy-services")!;

export const metadata: Metadata = {
  title: "Education loan interest rate in Vadodara | Loan Consultancy Services | VadodaraExperts",
  description: "Professional education loan interest rate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/loan-consultancy-services/education-loan-interest-rate-vadodara" },
  openGraph: {
    title: "Education loan interest rate in Vadodara | VadodaraExperts",
    description: "Professional education loan interest rate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/loan-consultancy-services/education-loan-interest-rate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="education-loan-interest-rate-vadodara" />;
}
