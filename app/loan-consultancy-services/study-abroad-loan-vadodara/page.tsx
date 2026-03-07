import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("loan-consultancy-services")!;

export const metadata: Metadata = {
  title: "Study abroad loan in Vadodara | Loan Consultancy Services | VadodaraExperts",
  description: "Professional study abroad loan services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/loan-consultancy-services/study-abroad-loan-vadodara" },
  openGraph: {
    title: "Study abroad loan in Vadodara | VadodaraExperts",
    description: "Professional study abroad loan services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/loan-consultancy-services/study-abroad-loan-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="study-abroad-loan-vadodara" />;
}
