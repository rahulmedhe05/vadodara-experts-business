import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("loan-consultancy-services")!;

export const metadata: Metadata = {
  title: "Project loan in Vadodara | Loan Consultancy Services | VadodaraExperts",
  description: "Professional project loan services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/loan-consultancy-services/project-loan-vadodara" },
  openGraph: {
    title: "Project loan in Vadodara | VadodaraExperts",
    description: "Professional project loan services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/loan-consultancy-services/project-loan-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="project-loan-vadodara" />;
}
