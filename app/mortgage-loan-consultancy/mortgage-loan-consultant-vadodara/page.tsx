import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mortgage-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Mortgage loan consultant in Vadodara | Mortgage Loan Consultancy | VadodaraExperts",
  description: "Professional mortgage loan consultant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mortgage-loan-consultancy/mortgage-loan-consultant-vadodara" },
  openGraph: {
    title: "Mortgage loan consultant in Vadodara | VadodaraExperts",
    description: "Professional mortgage loan consultant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mortgage-loan-consultancy/mortgage-loan-consultant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mortgage-loan-consultant-vadodara" />;
}
