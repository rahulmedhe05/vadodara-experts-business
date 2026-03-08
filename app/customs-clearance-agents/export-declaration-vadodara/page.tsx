import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Export declaration in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional export declaration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/export-declaration-vadodara" },
  openGraph: {
    title: "Export declaration in Vadodara | VadodaraExperts",
    description: "Professional export declaration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/export-declaration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="export-declaration-vadodara" />;
}
