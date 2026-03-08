import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-project-consultancy")!;

export const metadata: Metadata = {
  title: "term loan project report in Vadodara | Industrial Project Consultancy | VadodaraExperts",
  description: "Professional term loan project report services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-project-consultancy/term-loan-project-report-vadodara" },
  openGraph: {
    title: "term loan project report in Vadodara | VadodaraExperts",
    description: "Professional term loan project report services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-project-consultancy/term-loan-project-report-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="term-loan-project-report-vadodara" />;
}
