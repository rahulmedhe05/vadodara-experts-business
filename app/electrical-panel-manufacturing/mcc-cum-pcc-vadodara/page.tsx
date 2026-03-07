import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-panel-manufacturing")!;

export const metadata: Metadata = {
  title: "MCC cum PCC in Vadodara | Electrical Panel Manufacturing | VadodaraExperts",
  description: "Professional mcc cum pcc services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-panel-manufacturing/mcc-cum-pcc-vadodara" },
  openGraph: {
    title: "MCC cum PCC in Vadodara | VadodaraExperts",
    description: "Professional mcc cum pcc services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-panel-manufacturing/mcc-cum-pcc-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mcc-cum-pcc-vadodara" />;
}
