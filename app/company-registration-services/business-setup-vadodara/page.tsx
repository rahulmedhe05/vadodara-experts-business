import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "Business setup in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional business setup services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/business-setup-vadodara" },
  openGraph: {
    title: "Business setup in Vadodara | VadodaraExperts",
    description: "Professional business setup services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/business-setup-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="business-setup-vadodara" />;
}
