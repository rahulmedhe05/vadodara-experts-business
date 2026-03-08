import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-automation-systems")!;

export const metadata: Metadata = {
  title: "BMS contractor in Vadodara | Building Automation Systems | VadodaraExperts",
  description: "Professional bms contractor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-automation-systems/bms-contractor-vadodara" },
  openGraph: {
    title: "BMS contractor in Vadodara | VadodaraExperts",
    description: "Professional bms contractor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-automation-systems/bms-contractor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bms-contractor-vadodara" />;
}
