import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "Tax challan payment in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional tax challan payment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/tax-challan-payment-vadodara" },
  openGraph: {
    title: "Tax challan payment in Vadodara | VadodaraExperts",
    description: "Professional tax challan payment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/tax-challan-payment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tax-challan-payment-vadodara" />;
}
