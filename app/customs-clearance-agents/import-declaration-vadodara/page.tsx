import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Import declaration in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional import declaration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/import-declaration-vadodara" },
  openGraph: {
    title: "Import declaration in Vadodara | VadodaraExperts",
    description: "Professional import declaration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/import-declaration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="import-declaration-vadodara" />;
}
