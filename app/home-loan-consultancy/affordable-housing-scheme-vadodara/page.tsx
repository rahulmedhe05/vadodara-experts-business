import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Affordable housing scheme in Vadodara | Home Loan Consultancy | VadodaraExperts",
  description: "Professional affordable housing scheme services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-loan-consultancy/affordable-housing-scheme-vadodara" },
  openGraph: {
    title: "Affordable housing scheme in Vadodara | VadodaraExperts",
    description: "Professional affordable housing scheme services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-loan-consultancy/affordable-housing-scheme-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="affordable-housing-scheme-vadodara" />;
}
