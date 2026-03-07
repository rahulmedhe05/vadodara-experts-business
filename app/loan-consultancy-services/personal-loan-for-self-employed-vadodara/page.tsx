import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("loan-consultancy-services")!;

export const metadata: Metadata = {
  title: "Personal loan for self employed in Vadodara | Loan Consultancy Services | VadodaraExperts",
  description: "Professional personal loan for self employed services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/loan-consultancy-services/personal-loan-for-self-employed-vadodara" },
  openGraph: {
    title: "Personal loan for self employed in Vadodara | VadodaraExperts",
    description: "Professional personal loan for self employed services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/loan-consultancy-services/personal-loan-for-self-employed-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="personal-loan-for-self-employed-vadodara" />;
}
