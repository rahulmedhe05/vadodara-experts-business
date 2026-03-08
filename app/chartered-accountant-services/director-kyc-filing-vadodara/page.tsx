import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chartered-accountant-services")!;

export const metadata: Metadata = {
  title: "Director KYC filing in Vadodara | Chartered Accountant Services | VadodaraExperts",
  description: "Professional director kyc filing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chartered-accountant-services/director-kyc-filing-vadodara" },
  openGraph: {
    title: "Director KYC filing in Vadodara | VadodaraExperts",
    description: "Professional director kyc filing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chartered-accountant-services/director-kyc-filing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="director-kyc-filing-vadodara" />;
}
