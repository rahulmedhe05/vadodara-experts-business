import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chartered-accountant-services")!;

export const metadata: Metadata = {
  title: "Section 8 company registration in Vadodara | Chartered Accountant Services | VadodaraExperts",
  description: "Professional section 8 company registration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chartered-accountant-services/section-8-company-registration-vadodara" },
  openGraph: {
    title: "Section 8 company registration in Vadodara | VadodaraExperts",
    description: "Professional section 8 company registration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chartered-accountant-services/section-8-company-registration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="section-8-company-registration-vadodara" />;
}
