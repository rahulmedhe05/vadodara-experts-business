import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "Trademark registration in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional trademark registration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/trademark-registration-vadodara" },
  openGraph: {
    title: "Trademark registration in Vadodara | VadodaraExperts",
    description: "Professional trademark registration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/trademark-registration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="trademark-registration-vadodara" />;
}
