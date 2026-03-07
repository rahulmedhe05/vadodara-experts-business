import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "MGT 7 filing in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional mgt 7 filing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/mgt-7-filing-vadodara" },
  openGraph: {
    title: "MGT 7 filing in Vadodara | VadodaraExperts",
    description: "Professional mgt 7 filing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/mgt-7-filing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mgt-7-filing-vadodara" />;
}
