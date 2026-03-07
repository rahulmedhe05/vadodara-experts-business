import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("insurance-consultancy")!;

export const metadata: Metadata = {
  title: "Employee state insurance in Vadodara | Insurance Consultancy | VadodaraExperts",
  description: "Professional employee state insurance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/insurance-consultancy/employee-state-insurance-vadodara" },
  openGraph: {
    title: "Employee state insurance in Vadodara | VadodaraExperts",
    description: "Professional employee state insurance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/insurance-consultancy/employee-state-insurance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="employee-state-insurance-vadodara" />;
}
