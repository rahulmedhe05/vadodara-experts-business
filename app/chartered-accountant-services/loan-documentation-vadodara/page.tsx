import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chartered-accountant-services")!;

export const metadata: Metadata = {
  title: "Loan documentation in Vadodara | Chartered Accountant Services | VadodaraExperts",
  description: "Professional loan documentation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chartered-accountant-services/loan-documentation-vadodara" },
  openGraph: {
    title: "Loan documentation in Vadodara | VadodaraExperts",
    description: "Professional loan documentation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chartered-accountant-services/loan-documentation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="loan-documentation-vadodara" />;
}
