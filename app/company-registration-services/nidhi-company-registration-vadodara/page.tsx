import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "Nidhi company registration in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional nidhi company registration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/nidhi-company-registration-vadodara" },
  openGraph: {
    title: "Nidhi company registration in Vadodara | VadodaraExperts",
    description: "Professional nidhi company registration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/nidhi-company-registration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="nidhi-company-registration-vadodara" />;
}
