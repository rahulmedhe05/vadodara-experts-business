import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "Trade license in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional trade license services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/trade-license-vadodara" },
  openGraph: {
    title: "Trade license in Vadodara | VadodaraExperts",
    description: "Professional trade license services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/trade-license-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="trade-license-vadodara" />;
}
