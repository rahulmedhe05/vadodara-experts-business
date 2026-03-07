import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("loan-consultancy-services")!;

export const metadata: Metadata = {
  title: "Kisan credit card in Vadodara | Loan Consultancy Services | VadodaraExperts",
  description: "Professional kisan credit card services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/loan-consultancy-services/kisan-credit-card-vadodara" },
  openGraph: {
    title: "Kisan credit card in Vadodara | VadodaraExperts",
    description: "Professional kisan credit card services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/loan-consultancy-services/kisan-credit-card-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="kisan-credit-card-vadodara" />;
}
