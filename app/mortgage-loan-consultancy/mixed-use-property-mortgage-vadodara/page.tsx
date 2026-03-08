import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mortgage-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Mixed use property mortgage in Vadodara | Mortgage Loan Consultancy | VadodaraExperts",
  description: "Professional mixed use property mortgage services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mortgage-loan-consultancy/mixed-use-property-mortgage-vadodara" },
  openGraph: {
    title: "Mixed use property mortgage in Vadodara | VadodaraExperts",
    description: "Professional mixed use property mortgage services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mortgage-loan-consultancy/mixed-use-property-mortgage-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mixed-use-property-mortgage-vadodara" />;
}
