import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mortgage-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Warehouse mortgage loan in Vadodara | Mortgage Loan Consultancy | VadodaraExperts",
  description: "Professional warehouse mortgage loan services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mortgage-loan-consultancy/warehouse-mortgage-loan-vadodara" },
  openGraph: {
    title: "Warehouse mortgage loan in Vadodara | VadodaraExperts",
    description: "Professional warehouse mortgage loan services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mortgage-loan-consultancy/warehouse-mortgage-loan-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="warehouse-mortgage-loan-vadodara" />;
}
