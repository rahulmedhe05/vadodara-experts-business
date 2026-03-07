import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "Company strike off in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional company strike off services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/company-strike-off-vadodara" },
  openGraph: {
    title: "Company strike off in Vadodara | VadodaraExperts",
    description: "Professional company strike off services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/company-strike-off-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="company-strike-off-vadodara" />;
}
