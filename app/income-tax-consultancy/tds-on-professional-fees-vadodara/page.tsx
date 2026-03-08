import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "TDS on professional fees in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional tds on professional fees services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/tds-on-professional-fees-vadodara" },
  openGraph: {
    title: "TDS on professional fees in Vadodara | VadodaraExperts",
    description: "Professional tds on professional fees services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/tds-on-professional-fees-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tds-on-professional-fees-vadodara" />;
}
