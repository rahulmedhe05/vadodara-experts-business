import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "Aadhaar PAN linking in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional aadhaar pan linking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/aadhaar-pan-linking-vadodara" },
  openGraph: {
    title: "Aadhaar PAN linking in Vadodara | VadodaraExperts",
    description: "Professional aadhaar pan linking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/aadhaar-pan-linking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="aadhaar-pan-linking-vadodara" />;
}
