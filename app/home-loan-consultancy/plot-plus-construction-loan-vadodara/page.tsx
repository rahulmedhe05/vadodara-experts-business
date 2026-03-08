import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Plot plus construction loan in Vadodara | Home Loan Consultancy | VadodaraExperts",
  description: "Professional plot plus construction loan services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-loan-consultancy/plot-plus-construction-loan-vadodara" },
  openGraph: {
    title: "Plot plus construction loan in Vadodara | VadodaraExperts",
    description: "Professional plot plus construction loan services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-loan-consultancy/plot-plus-construction-loan-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plot-plus-construction-loan-vadodara" />;
}
