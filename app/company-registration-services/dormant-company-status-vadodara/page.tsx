import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "Dormant company status in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional dormant company status services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/dormant-company-status-vadodara" },
  openGraph: {
    title: "Dormant company status in Vadodara | VadodaraExperts",
    description: "Professional dormant company status services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/dormant-company-status-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dormant-company-status-vadodara" />;
}
