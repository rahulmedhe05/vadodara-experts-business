import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-automation-systems")!;

export const metadata: Metadata = {
  title: "BMS company in Vadodara | Building Automation Systems | VadodaraExperts",
  description: "Professional bms company services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-automation-systems/bms-company-vadodara" },
  openGraph: {
    title: "BMS company in Vadodara | VadodaraExperts",
    description: "Professional bms company services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-automation-systems/bms-company-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bms-company-vadodara" />;
}
