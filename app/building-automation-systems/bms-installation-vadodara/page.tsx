import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-automation-systems")!;

export const metadata: Metadata = {
  title: "BMS installation in Vadodara | Building Automation Systems | VadodaraExperts",
  description: "Professional bms installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-automation-systems/bms-installation-vadodara" },
  openGraph: {
    title: "BMS installation in Vadodara | VadodaraExperts",
    description: "Professional bms installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-automation-systems/bms-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bms-installation-vadodara" />;
}
