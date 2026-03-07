import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("personal-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Pre approved personal loan in Vadodara | Personal Loan Consultancy | VadodaraExperts",
  description: "Professional pre approved personal loan services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/personal-loan-consultancy/pre-approved-personal-loan-vadodara" },
  openGraph: {
    title: "Pre approved personal loan in Vadodara | VadodaraExperts",
    description: "Professional pre approved personal loan services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/personal-loan-consultancy/pre-approved-personal-loan-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pre-approved-personal-loan-vadodara" />;
}
