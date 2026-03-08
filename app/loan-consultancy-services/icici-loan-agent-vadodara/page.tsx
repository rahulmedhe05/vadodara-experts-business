import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("loan-consultancy-services")!;

export const metadata: Metadata = {
  title: "ICICI loan agent in Vadodara | Loan Consultancy Services | VadodaraExperts",
  description: "Professional icici loan agent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/loan-consultancy-services/icici-loan-agent-vadodara" },
  openGraph: {
    title: "ICICI loan agent in Vadodara | VadodaraExperts",
    description: "Professional icici loan agent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/loan-consultancy-services/icici-loan-agent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="icici-loan-agent-vadodara" />;
}
