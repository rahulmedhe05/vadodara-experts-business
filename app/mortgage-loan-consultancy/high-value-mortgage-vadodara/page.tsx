import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mortgage-loan-consultancy")!;

export const metadata: Metadata = {
  title: "High value mortgage in Vadodara | Mortgage Loan Consultancy | VadodaraExperts",
  description: "Professional high value mortgage services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mortgage-loan-consultancy/high-value-mortgage-vadodara" },
  openGraph: {
    title: "High value mortgage in Vadodara | VadodaraExperts",
    description: "Professional high value mortgage services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mortgage-loan-consultancy/high-value-mortgage-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="high-value-mortgage-vadodara" />;
}
