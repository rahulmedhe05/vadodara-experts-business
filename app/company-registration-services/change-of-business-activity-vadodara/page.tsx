import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "Change of business activity in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional change of business activity services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/change-of-business-activity-vadodara" },
  openGraph: {
    title: "Change of business activity in Vadodara | VadodaraExperts",
    description: "Professional change of business activity services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/change-of-business-activity-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="change-of-business-activity-vadodara" />;
}
