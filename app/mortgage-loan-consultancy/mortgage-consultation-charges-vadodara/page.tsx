import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mortgage-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Mortgage consultation charges in Vadodara | Mortgage Loan Consultancy | VadodaraExperts",
  description: "Professional mortgage consultation charges services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mortgage-loan-consultancy/mortgage-consultation-charges-vadodara" },
  openGraph: {
    title: "Mortgage consultation charges in Vadodara | VadodaraExperts",
    description: "Professional mortgage consultation charges services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mortgage-loan-consultancy/mortgage-consultation-charges-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mortgage-consultation-charges-vadodara" />;
}
