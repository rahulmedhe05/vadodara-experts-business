import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Authorized economic operator in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional authorized economic operator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/authorized-economic-operator-vadodara" },
  openGraph: {
    title: "Authorized economic operator in Vadodara | VadodaraExperts",
    description: "Professional authorized economic operator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/authorized-economic-operator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="authorized-economic-operator-vadodara" />;
}
