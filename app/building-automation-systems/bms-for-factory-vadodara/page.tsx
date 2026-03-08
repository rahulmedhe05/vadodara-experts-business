import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-automation-systems")!;

export const metadata: Metadata = {
  title: "BMS for factory in Vadodara | Building Automation Systems | VadodaraExperts",
  description: "Professional bms for factory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-automation-systems/bms-for-factory-vadodara" },
  openGraph: {
    title: "BMS for factory in Vadodara | VadodaraExperts",
    description: "Professional bms for factory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-automation-systems/bms-for-factory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bms-for-factory-vadodara" />;
}
