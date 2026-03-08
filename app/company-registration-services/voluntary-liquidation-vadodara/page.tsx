import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "Voluntary liquidation in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional voluntary liquidation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/voluntary-liquidation-vadodara" },
  openGraph: {
    title: "Voluntary liquidation in Vadodara | VadodaraExperts",
    description: "Professional voluntary liquidation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/voluntary-liquidation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="voluntary-liquidation-vadodara" />;
}
