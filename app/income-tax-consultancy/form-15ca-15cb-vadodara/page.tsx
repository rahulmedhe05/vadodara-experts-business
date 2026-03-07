import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "Form 15CA 15CB in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional form 15ca 15cb services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/form-15ca-15cb-vadodara" },
  openGraph: {
    title: "Form 15CA 15CB in Vadodara | VadodaraExperts",
    description: "Professional form 15ca 15cb services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/form-15ca-15cb-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="form-15ca-15cb-vadodara" />;
}
