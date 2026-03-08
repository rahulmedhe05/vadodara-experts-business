import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-automation-systems")!;

export const metadata: Metadata = {
  title: "BMS for data centre in Vadodara | Building Automation Systems | VadodaraExperts",
  description: "Professional bms for data centre services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-automation-systems/bms-for-data-centre-vadodara" },
  openGraph: {
    title: "BMS for data centre in Vadodara | VadodaraExperts",
    description: "Professional bms for data centre services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-automation-systems/bms-for-data-centre-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bms-for-data-centre-vadodara" />;
}
