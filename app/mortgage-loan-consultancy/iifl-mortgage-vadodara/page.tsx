import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mortgage-loan-consultancy")!;

export const metadata: Metadata = {
  title: "IIFL mortgage in Vadodara | Mortgage Loan Consultancy | VadodaraExperts",
  description: "Professional iifl mortgage services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mortgage-loan-consultancy/iifl-mortgage-vadodara" },
  openGraph: {
    title: "IIFL mortgage in Vadodara | VadodaraExperts",
    description: "Professional iifl mortgage services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mortgage-loan-consultancy/iifl-mortgage-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="iifl-mortgage-vadodara" />;
}
