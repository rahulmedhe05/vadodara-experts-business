import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mortgage-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Mortgage broker in Vadodara | Mortgage Loan Consultancy | VadodaraExperts",
  description: "Professional mortgage broker services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mortgage-loan-consultancy/mortgage-broker-vadodara" },
  openGraph: {
    title: "Mortgage broker in Vadodara | VadodaraExperts",
    description: "Professional mortgage broker services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mortgage-loan-consultancy/mortgage-broker-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mortgage-broker-vadodara" />;
}
