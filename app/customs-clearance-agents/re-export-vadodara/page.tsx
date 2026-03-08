import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Re-export in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional re-export services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/re-export-vadodara" },
  openGraph: {
    title: "Re-export in Vadodara | VadodaraExperts",
    description: "Professional re-export services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/re-export-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="re-export-vadodara" />;
}
