import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("scada-system-integration")!;

export const metadata: Metadata = {
  title: "ABB Ability SCADA in Vadodara | SCADA System Integration | VadodaraExperts",
  description: "Professional abb ability scada services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/scada-system-integration/abb-ability-scada-vadodara" },
  openGraph: {
    title: "ABB Ability SCADA in Vadodara | VadodaraExperts",
    description: "Professional abb ability scada services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/scada-system-integration/abb-ability-scada-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="abb-ability-scada-vadodara" />;
}
