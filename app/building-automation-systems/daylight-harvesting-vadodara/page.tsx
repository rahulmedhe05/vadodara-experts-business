import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-automation-systems")!;

export const metadata: Metadata = {
  title: "daylight harvesting in Vadodara | Building Automation Systems | VadodaraExperts",
  description: "Professional daylight harvesting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-automation-systems/daylight-harvesting-vadodara" },
  openGraph: {
    title: "daylight harvesting in Vadodara | VadodaraExperts",
    description: "Professional daylight harvesting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-automation-systems/daylight-harvesting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="daylight-harvesting-vadodara" />;
}
