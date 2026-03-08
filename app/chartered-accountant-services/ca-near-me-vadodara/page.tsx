import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chartered-accountant-services")!;

export const metadata: Metadata = {
  title: "CA near me in Vadodara | Chartered Accountant Services | VadodaraExperts",
  description: "Professional ca near me services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chartered-accountant-services/ca-near-me-vadodara" },
  openGraph: {
    title: "CA near me in Vadodara | VadodaraExperts",
    description: "Professional ca near me services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chartered-accountant-services/ca-near-me-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ca-near-me-vadodara" />;
}
