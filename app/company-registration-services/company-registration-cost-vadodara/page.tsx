import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "Company registration cost in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional company registration cost services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/company-registration-cost-vadodara" },
  openGraph: {
    title: "Company registration cost in Vadodara | VadodaraExperts",
    description: "Professional company registration cost services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/company-registration-cost-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="company-registration-cost-vadodara" />;
}
