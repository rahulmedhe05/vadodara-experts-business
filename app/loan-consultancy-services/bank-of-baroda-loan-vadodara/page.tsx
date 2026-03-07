import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("loan-consultancy-services")!;

export const metadata: Metadata = {
  title: "Bank of Baroda loan in Vadodara | Loan Consultancy Services | VadodaraExperts",
  description: "Professional bank of baroda loan services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/loan-consultancy-services/bank-of-baroda-loan-vadodara" },
  openGraph: {
    title: "Bank of Baroda loan in Vadodara | VadodaraExperts",
    description: "Professional bank of baroda loan services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/loan-consultancy-services/bank-of-baroda-loan-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bank-of-baroda-loan-vadodara" />;
}
