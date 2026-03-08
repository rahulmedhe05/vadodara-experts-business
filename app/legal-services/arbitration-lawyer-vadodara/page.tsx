import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("legal-services")!;

export const metadata: Metadata = {
  title: "Arbitration lawyer in Vadodara | Legal Services | VadodaraExperts",
  description: "Professional arbitration lawyer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/legal-services/arbitration-lawyer-vadodara" },
  openGraph: {
    title: "Arbitration lawyer in Vadodara | VadodaraExperts",
    description: "Professional arbitration lawyer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/legal-services/arbitration-lawyer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="arbitration-lawyer-vadodara" />;
}
