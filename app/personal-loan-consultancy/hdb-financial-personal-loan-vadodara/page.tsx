import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("personal-loan-consultancy")!;

export const metadata: Metadata = {
  title: "HDB Financial personal loan in Vadodara | Personal Loan Consultancy | VadodaraExperts",
  description: "Professional hdb financial personal loan services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/personal-loan-consultancy/hdb-financial-personal-loan-vadodara" },
  openGraph: {
    title: "HDB Financial personal loan in Vadodara | VadodaraExperts",
    description: "Professional hdb financial personal loan services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/personal-loan-consultancy/hdb-financial-personal-loan-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hdb-financial-personal-loan-vadodara" />;
}
