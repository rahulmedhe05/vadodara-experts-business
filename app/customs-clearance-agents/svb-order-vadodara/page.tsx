import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "SVB order in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional svb order services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/svb-order-vadodara" },
  openGraph: {
    title: "SVB order in Vadodara | VadodaraExperts",
    description: "Professional svb order services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/svb-order-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="svb-order-vadodara" />;
}
