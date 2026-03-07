import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("insurance-consultancy")!;

export const metadata: Metadata = {
  title: "New India Assurance in Vadodara | Insurance Consultancy | VadodaraExperts",
  description: "Professional new india assurance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/insurance-consultancy/new-india-assurance-vadodara" },
  openGraph: {
    title: "New India Assurance in Vadodara | VadodaraExperts",
    description: "Professional new india assurance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/insurance-consultancy/new-india-assurance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="new-india-assurance-vadodara" />;
}
