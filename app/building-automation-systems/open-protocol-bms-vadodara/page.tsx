import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-automation-systems")!;

export const metadata: Metadata = {
  title: "open protocol BMS in Vadodara | Building Automation Systems | VadodaraExperts",
  description: "Professional open protocol bms services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-automation-systems/open-protocol-bms-vadodara" },
  openGraph: {
    title: "open protocol BMS in Vadodara | VadodaraExperts",
    description: "Professional open protocol bms services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-automation-systems/open-protocol-bms-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="open-protocol-bms-vadodara" />;
}
