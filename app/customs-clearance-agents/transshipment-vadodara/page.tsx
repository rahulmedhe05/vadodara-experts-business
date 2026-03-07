import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Transshipment in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional transshipment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/transshipment-vadodara" },
  openGraph: {
    title: "Transshipment in Vadodara | VadodaraExperts",
    description: "Professional transshipment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/transshipment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="transshipment-vadodara" />;
}
