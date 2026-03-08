import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chartered-accountant-services")!;

export const metadata: Metadata = {
  title: "Bank loan assistance in Vadodara | Chartered Accountant Services | VadodaraExperts",
  description: "Professional bank loan assistance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chartered-accountant-services/bank-loan-assistance-vadodara" },
  openGraph: {
    title: "Bank loan assistance in Vadodara | VadodaraExperts",
    description: "Professional bank loan assistance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chartered-accountant-services/bank-loan-assistance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bank-loan-assistance-vadodara" />;
}
