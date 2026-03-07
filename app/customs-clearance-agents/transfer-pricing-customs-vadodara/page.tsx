import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Transfer pricing customs in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional transfer pricing customs services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/transfer-pricing-customs-vadodara" },
  openGraph: {
    title: "Transfer pricing customs in Vadodara | VadodaraExperts",
    description: "Professional transfer pricing customs services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/transfer-pricing-customs-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="transfer-pricing-customs-vadodara" />;
}
