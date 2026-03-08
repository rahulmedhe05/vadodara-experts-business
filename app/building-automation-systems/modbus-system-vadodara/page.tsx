import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-automation-systems")!;

export const metadata: Metadata = {
  title: "Modbus system in Vadodara | Building Automation Systems | VadodaraExperts",
  description: "Professional modbus system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-automation-systems/modbus-system-vadodara" },
  openGraph: {
    title: "Modbus system in Vadodara | VadodaraExperts",
    description: "Professional modbus system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-automation-systems/modbus-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="modbus-system-vadodara" />;
}
