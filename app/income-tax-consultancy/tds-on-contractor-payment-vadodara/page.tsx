import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "TDS on contractor payment in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional tds on contractor payment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/tds-on-contractor-payment-vadodara" },
  openGraph: {
    title: "TDS on contractor payment in Vadodara | VadodaraExperts",
    description: "Professional tds on contractor payment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/tds-on-contractor-payment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tds-on-contractor-payment-vadodara" />;
}
