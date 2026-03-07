import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-automation-systems")!;

export const metadata: Metadata = {
  title: "mobile app BMS in Vadodara | Building Automation Systems | VadodaraExperts",
  description: "Professional mobile app bms services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-automation-systems/mobile-app-bms-vadodara" },
  openGraph: {
    title: "mobile app BMS in Vadodara | VadodaraExperts",
    description: "Professional mobile app bms services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-automation-systems/mobile-app-bms-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mobile-app-bms-vadodara" />;
}
