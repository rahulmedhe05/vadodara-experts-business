import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "Annual return filing in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional annual return filing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/annual-return-filing-vadodara" },
  openGraph: {
    title: "Annual return filing in Vadodara | VadodaraExperts",
    description: "Professional annual return filing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/annual-return-filing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="annual-return-filing-vadodara" />;
}
