import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Out of charge in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional out of charge services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/out-of-charge-vadodara" },
  openGraph: {
    title: "Out of charge in Vadodara | VadodaraExperts",
    description: "Professional out of charge services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/out-of-charge-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="out-of-charge-vadodara" />;
}
