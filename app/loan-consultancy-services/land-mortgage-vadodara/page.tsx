import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("loan-consultancy-services")!;

export const metadata: Metadata = {
  title: "Land mortgage in Vadodara | Loan Consultancy Services | VadodaraExperts",
  description: "Professional land mortgage services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/loan-consultancy-services/land-mortgage-vadodara" },
  openGraph: {
    title: "Land mortgage in Vadodara | VadodaraExperts",
    description: "Professional land mortgage services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/loan-consultancy-services/land-mortgage-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="land-mortgage-vadodara" />;
}
