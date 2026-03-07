import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "Public limited company registration in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional public limited company registration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/public-limited-company-registration-vadodara" },
  openGraph: {
    title: "Public limited company registration in Vadodara | VadodaraExperts",
    description: "Professional public limited company registration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/public-limited-company-registration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="public-limited-company-registration-vadodara" />;
}
