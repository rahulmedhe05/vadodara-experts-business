import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("loan-consultancy-services")!;

export const metadata: Metadata = {
  title: "LAP in Vadodara | Loan Consultancy Services | VadodaraExperts",
  description: "Professional lap services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/loan-consultancy-services/lap-vadodara" },
  openGraph: {
    title: "LAP in Vadodara | VadodaraExperts",
    description: "Professional lap services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/loan-consultancy-services/lap-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lap-vadodara" />;
}
