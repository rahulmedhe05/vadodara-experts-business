import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "Director resignation filing in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional director resignation filing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/director-resignation-filing-vadodara" },
  openGraph: {
    title: "Director resignation filing in Vadodara | VadodaraExperts",
    description: "Professional director resignation filing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/director-resignation-filing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="director-resignation-filing-vadodara" />;
}
