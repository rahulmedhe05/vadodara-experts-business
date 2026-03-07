import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-panel-manufacturing")!;

export const metadata: Metadata = {
  title: "automatic transfer switch in Vadodara | Electrical Panel Manufacturing | VadodaraExperts",
  description: "Professional automatic transfer switch services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-panel-manufacturing/automatic-transfer-switch-vadodara" },
  openGraph: {
    title: "automatic transfer switch in Vadodara | VadodaraExperts",
    description: "Professional automatic transfer switch services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-panel-manufacturing/automatic-transfer-switch-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="automatic-transfer-switch-vadodara" />;
}
