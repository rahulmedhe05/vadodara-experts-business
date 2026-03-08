import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "Section 80D deduction in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional section 80d deduction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/section-80d-deduction-vadodara" },
  openGraph: {
    title: "Section 80D deduction in Vadodara | VadodaraExperts",
    description: "Professional section 80d deduction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/section-80d-deduction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="section-80d-deduction-vadodara" />;
}
