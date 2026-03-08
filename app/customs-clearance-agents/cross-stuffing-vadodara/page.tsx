import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Cross stuffing in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional cross stuffing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/cross-stuffing-vadodara" },
  openGraph: {
    title: "Cross stuffing in Vadodara | VadodaraExperts",
    description: "Professional cross stuffing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/cross-stuffing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cross-stuffing-vadodara" />;
}
