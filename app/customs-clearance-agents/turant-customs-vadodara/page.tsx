import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Turant customs in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional turant customs services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/turant-customs-vadodara" },
  openGraph: {
    title: "Turant customs in Vadodara | VadodaraExperts",
    description: "Professional turant customs services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/turant-customs-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="turant-customs-vadodara" />;
}
