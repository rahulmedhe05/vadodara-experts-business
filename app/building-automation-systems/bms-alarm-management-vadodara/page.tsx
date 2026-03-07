import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-automation-systems")!;

export const metadata: Metadata = {
  title: "BMS alarm management in Vadodara | Building Automation Systems | VadodaraExperts",
  description: "Professional bms alarm management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-automation-systems/bms-alarm-management-vadodara" },
  openGraph: {
    title: "BMS alarm management in Vadodara | VadodaraExperts",
    description: "Professional bms alarm management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-automation-systems/bms-alarm-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bms-alarm-management-vadodara" />;
}
