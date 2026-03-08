import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("loan-consultancy-services")!;

export const metadata: Metadata = {
  title: "Car loan in Vadodara | Loan Consultancy Services | VadodaraExperts",
  description: "Professional car loan services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/loan-consultancy-services/car-loan-vadodara" },
  openGraph: {
    title: "Car loan in Vadodara | VadodaraExperts",
    description: "Professional car loan services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/loan-consultancy-services/car-loan-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="car-loan-vadodara" />;
}
