import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Bill of entry in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional bill of entry services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/bill-of-entry-vadodara" },
  openGraph: {
    title: "Bill of entry in Vadodara | VadodaraExperts",
    description: "Professional bill of entry services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/bill-of-entry-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bill-of-entry-vadodara" />;
}
