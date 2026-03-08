import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("loan-consultancy-services")!;

export const metadata: Metadata = {
  title: "Personal loan EMI in Vadodara | Loan Consultancy Services | VadodaraExperts",
  description: "Professional personal loan emi services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/loan-consultancy-services/personal-loan-emi-vadodara" },
  openGraph: {
    title: "Personal loan EMI in Vadodara | VadodaraExperts",
    description: "Professional personal loan emi services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/loan-consultancy-services/personal-loan-emi-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="personal-loan-emi-vadodara" />;
}
