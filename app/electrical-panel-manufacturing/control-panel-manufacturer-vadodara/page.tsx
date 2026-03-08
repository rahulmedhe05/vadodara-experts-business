import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-panel-manufacturing")!;

export const metadata: Metadata = {
  title: "control panel manufacturer in Vadodara | Electrical Panel Manufacturing | VadodaraExperts",
  description: "Professional control panel manufacturer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-panel-manufacturing/control-panel-manufacturer-vadodara" },
  openGraph: {
    title: "control panel manufacturer in Vadodara | VadodaraExperts",
    description: "Professional control panel manufacturer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-panel-manufacturing/control-panel-manufacturer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="control-panel-manufacturer-vadodara" />;
}
