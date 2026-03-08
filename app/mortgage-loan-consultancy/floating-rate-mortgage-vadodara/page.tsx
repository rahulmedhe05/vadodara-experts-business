import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mortgage-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Floating rate mortgage in Vadodara | Mortgage Loan Consultancy | VadodaraExperts",
  description: "Professional floating rate mortgage services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mortgage-loan-consultancy/floating-rate-mortgage-vadodara" },
  openGraph: {
    title: "Floating rate mortgage in Vadodara | VadodaraExperts",
    description: "Professional floating rate mortgage services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mortgage-loan-consultancy/floating-rate-mortgage-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="floating-rate-mortgage-vadodara" />;
}
