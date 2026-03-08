import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chartered-accountant-services")!;

export const metadata: Metadata = {
  title: "Company compliance in Vadodara | Chartered Accountant Services | VadodaraExperts",
  description: "Professional company compliance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chartered-accountant-services/company-compliance-vadodara" },
  openGraph: {
    title: "Company compliance in Vadodara | VadodaraExperts",
    description: "Professional company compliance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chartered-accountant-services/company-compliance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="company-compliance-vadodara" />;
}
