import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mortgage-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Kotak Mahindra LAP in Vadodara | Mortgage Loan Consultancy | VadodaraExperts",
  description: "Professional kotak mahindra lap services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mortgage-loan-consultancy/kotak-mahindra-lap-vadodara" },
  openGraph: {
    title: "Kotak Mahindra LAP in Vadodara | VadodaraExperts",
    description: "Professional kotak mahindra lap services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mortgage-loan-consultancy/kotak-mahindra-lap-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="kotak-mahindra-lap-vadodara" />;
}
