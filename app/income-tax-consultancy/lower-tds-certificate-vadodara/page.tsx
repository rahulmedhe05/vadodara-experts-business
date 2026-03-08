import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "Lower TDS certificate in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional lower tds certificate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/lower-tds-certificate-vadodara" },
  openGraph: {
    title: "Lower TDS certificate in Vadodara | VadodaraExperts",
    description: "Professional lower tds certificate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/lower-tds-certificate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lower-tds-certificate-vadodara" />;
}
