import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("loan-consultancy-services")!;

export const metadata: Metadata = {
  title: "Affordable home loan in Vadodara | Loan Consultancy Services | VadodaraExperts",
  description: "Professional affordable home loan services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/loan-consultancy-services/affordable-home-loan-vadodara" },
  openGraph: {
    title: "Affordable home loan in Vadodara | VadodaraExperts",
    description: "Professional affordable home loan services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/loan-consultancy-services/affordable-home-loan-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="affordable-home-loan-vadodara" />;
}
