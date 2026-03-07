import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-loan-consultancy")!;

export const metadata: Metadata = {
  title: "LIC Housing Finance in Vadodara | Home Loan Consultancy | VadodaraExperts",
  description: "Professional lic housing finance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-loan-consultancy/lic-housing-finance-vadodara" },
  openGraph: {
    title: "LIC Housing Finance in Vadodara | VadodaraExperts",
    description: "Professional lic housing finance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-loan-consultancy/lic-housing-finance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lic-housing-finance-vadodara" />;
}
