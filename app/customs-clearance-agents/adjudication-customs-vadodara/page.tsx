import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Adjudication customs in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional adjudication customs services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/adjudication-customs-vadodara" },
  openGraph: {
    title: "Adjudication customs in Vadodara | VadodaraExperts",
    description: "Professional adjudication customs services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/adjudication-customs-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="adjudication-customs-vadodara" />;
}
