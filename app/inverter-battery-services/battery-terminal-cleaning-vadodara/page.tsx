import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("inverter-battery-services")!;

export const metadata: Metadata = {
  title: "Battery terminal cleaning in Vadodara | Inverter & Battery Services | VadodaraExperts",
  description: "Professional battery terminal cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/inverter-battery-services/battery-terminal-cleaning-vadodara" },
  openGraph: {
    title: "Battery terminal cleaning in Vadodara | VadodaraExperts",
    description: "Professional battery terminal cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/inverter-battery-services/battery-terminal-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="battery-terminal-cleaning-vadodara" />;
}
