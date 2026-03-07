import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-automation-systems")!;

export const metadata: Metadata = {
  title: "BMS remote access in Vadodara | Building Automation Systems | VadodaraExperts",
  description: "Professional bms remote access services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-automation-systems/bms-remote-access-vadodara" },
  openGraph: {
    title: "BMS remote access in Vadodara | VadodaraExperts",
    description: "Professional bms remote access services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-automation-systems/bms-remote-access-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bms-remote-access-vadodara" />;
}
