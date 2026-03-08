import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "First check in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional first check services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/first-check-vadodara" },
  openGraph: {
    title: "First check in Vadodara | VadodaraExperts",
    description: "Professional first check services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/first-check-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="first-check-vadodara" />;
}
