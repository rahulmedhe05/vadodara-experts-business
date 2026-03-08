import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chartered-accountant-services")!;

export const metadata: Metadata = {
  title: "Tax notice reply in Vadodara | Chartered Accountant Services | VadodaraExperts",
  description: "Professional tax notice reply services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chartered-accountant-services/tax-notice-reply-vadodara" },
  openGraph: {
    title: "Tax notice reply in Vadodara | VadodaraExperts",
    description: "Professional tax notice reply services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chartered-accountant-services/tax-notice-reply-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tax-notice-reply-vadodara" />;
}
