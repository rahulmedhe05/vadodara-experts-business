import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("loan-consultancy-services")!;

export const metadata: Metadata = {
  title: "Loan consultant in Vadodara | Loan Consultancy Services | VadodaraExperts",
  description: "Professional loan consultant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/loan-consultancy-services/loan-consultant-vadodara" },
  openGraph: {
    title: "Loan consultant in Vadodara | VadodaraExperts",
    description: "Professional loan consultant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/loan-consultancy-services/loan-consultant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="loan-consultant-vadodara" />;
}
