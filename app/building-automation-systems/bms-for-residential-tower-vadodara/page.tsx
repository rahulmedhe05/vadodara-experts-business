import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-automation-systems")!;

export const metadata: Metadata = {
  title: "BMS for residential tower in Vadodara | Building Automation Systems | VadodaraExperts",
  description: "Professional bms for residential tower services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-automation-systems/bms-for-residential-tower-vadodara" },
  openGraph: {
    title: "BMS for residential tower in Vadodara | VadodaraExperts",
    description: "Professional bms for residential tower services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-automation-systems/bms-for-residential-tower-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bms-for-residential-tower-vadodara" />;
}
