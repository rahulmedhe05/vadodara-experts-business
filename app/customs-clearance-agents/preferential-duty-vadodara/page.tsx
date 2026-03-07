import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Preferential duty in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional preferential duty services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/preferential-duty-vadodara" },
  openGraph: {
    title: "Preferential duty in Vadodara | VadodaraExperts",
    description: "Professional preferential duty services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/preferential-duty-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="preferential-duty-vadodara" />;
}
