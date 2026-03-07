import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Warehousing customs in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional warehousing customs services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/warehousing-customs-vadodara" },
  openGraph: {
    title: "Warehousing customs in Vadodara | VadodaraExperts",
    description: "Professional warehousing customs services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/warehousing-customs-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="warehousing-customs-vadodara" />;
}
