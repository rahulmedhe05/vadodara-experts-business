import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("personal-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Personal loan documents in Vadodara | Personal Loan Consultancy | VadodaraExperts",
  description: "Professional personal loan documents services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/personal-loan-consultancy/personal-loan-documents-vadodara" },
  openGraph: {
    title: "Personal loan documents in Vadodara | VadodaraExperts",
    description: "Professional personal loan documents services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/personal-loan-consultancy/personal-loan-documents-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="personal-loan-documents-vadodara" />;
}
