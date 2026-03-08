import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Physical examination customs in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional physical examination customs services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/physical-examination-customs-vadodara" },
  openGraph: {
    title: "Physical examination customs in Vadodara | VadodaraExperts",
    description: "Professional physical examination customs services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/physical-examination-customs-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="physical-examination-customs-vadodara" />;
}
