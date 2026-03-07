import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mortgage-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Plot mortgage in Vadodara | Mortgage Loan Consultancy | VadodaraExperts",
  description: "Professional plot mortgage services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mortgage-loan-consultancy/plot-mortgage-vadodara" },
  openGraph: {
    title: "Plot mortgage in Vadodara | VadodaraExperts",
    description: "Professional plot mortgage services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mortgage-loan-consultancy/plot-mortgage-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plot-mortgage-vadodara" />;
}
