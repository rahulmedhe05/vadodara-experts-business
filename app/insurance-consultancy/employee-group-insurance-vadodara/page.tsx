import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("insurance-consultancy")!;

export const metadata: Metadata = {
  title: "Employee group insurance in Vadodara | Insurance Consultancy | VadodaraExperts",
  description: "Professional employee group insurance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/insurance-consultancy/employee-group-insurance-vadodara" },
  openGraph: {
    title: "Employee group insurance in Vadodara | VadodaraExperts",
    description: "Professional employee group insurance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/insurance-consultancy/employee-group-insurance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="employee-group-insurance-vadodara" />;
}
