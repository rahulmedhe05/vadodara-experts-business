import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chartered-accountant-services")!;

export const metadata: Metadata = {
  title: "Foreign remittance advisory in Vadodara | Chartered Accountant Services | VadodaraExperts",
  description: "Professional foreign remittance advisory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chartered-accountant-services/foreign-remittance-advisory-vadodara" },
  openGraph: {
    title: "Foreign remittance advisory in Vadodara | VadodaraExperts",
    description: "Professional foreign remittance advisory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chartered-accountant-services/foreign-remittance-advisory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="foreign-remittance-advisory-vadodara" />;
}
