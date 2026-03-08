import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("inverter-battery-services")!;

export const metadata: Metadata = {
  title: "Power backup AMC in Vadodara | Inverter & Battery Services | VadodaraExperts",
  description: "Professional power backup amc services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/inverter-battery-services/power-backup-amc-vadodara" },
  openGraph: {
    title: "Power backup AMC in Vadodara | VadodaraExperts",
    description: "Professional power backup amc services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/inverter-battery-services/power-backup-amc-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="power-backup-amc-vadodara" />;
}
