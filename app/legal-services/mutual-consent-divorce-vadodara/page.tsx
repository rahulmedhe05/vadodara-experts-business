import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("legal-services")!;

export const metadata: Metadata = {
  title: "Mutual consent divorce in Vadodara | Legal Services | VadodaraExperts",
  description: "Professional mutual consent divorce services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/legal-services/mutual-consent-divorce-vadodara" },
  openGraph: {
    title: "Mutual consent divorce in Vadodara | VadodaraExperts",
    description: "Professional mutual consent divorce services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/legal-services/mutual-consent-divorce-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mutual-consent-divorce-vadodara" />;
}
