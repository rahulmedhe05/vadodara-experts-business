import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("personal-training-services")!;

export const metadata: Metadata = {
  title: "Balance training seniors in Vadodara | Personal Training Services | VadodaraExperts",
  description: "Professional balance training seniors services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/personal-training-services/balance-training-seniors-vadodara" },
  openGraph: {
    title: "Balance training seniors in Vadodara | VadodaraExperts",
    description: "Professional balance training seniors services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/personal-training-services/balance-training-seniors-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="balance-training-seniors-vadodara" />;
}
