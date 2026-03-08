import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mortgage-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Industrial shed mortgage in Vadodara | Mortgage Loan Consultancy | VadodaraExperts",
  description: "Professional industrial shed mortgage services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mortgage-loan-consultancy/industrial-shed-mortgage-vadodara" },
  openGraph: {
    title: "Industrial shed mortgage in Vadodara | VadodaraExperts",
    description: "Professional industrial shed mortgage services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mortgage-loan-consultancy/industrial-shed-mortgage-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-shed-mortgage-vadodara" />;
}
