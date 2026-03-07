import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mortgage-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Tata Capital LAP in Vadodara | Mortgage Loan Consultancy | VadodaraExperts",
  description: "Professional tata capital lap services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mortgage-loan-consultancy/tata-capital-lap-vadodara" },
  openGraph: {
    title: "Tata Capital LAP in Vadodara | VadodaraExperts",
    description: "Professional tata capital lap services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mortgage-loan-consultancy/tata-capital-lap-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tata-capital-lap-vadodara" />;
}
