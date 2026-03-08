import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-automation-systems")!;

export const metadata: Metadata = {
  title: "HVAC BMS in Vadodara | Building Automation Systems | VadodaraExperts",
  description: "Professional hvac bms services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-automation-systems/hvac-bms-vadodara" },
  openGraph: {
    title: "HVAC BMS in Vadodara | VadodaraExperts",
    description: "Professional hvac bms services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-automation-systems/hvac-bms-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hvac-bms-vadodara" />;
}
